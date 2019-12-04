const rpc: any = require('node-json-rpc');

const options: any = {
	port: 7016,
	host: '127.0.0.1',
	path: '/',
	strict: true,
};

let serviceName: string = '';

if (process.argv.length >= 3) {
	serviceName = process.argv[2];
}

// Create a client object with options
const client: any = new rpc.Client(options);

client.call({ method: 'domain_name', params: [serviceName] }, (err: any, res: any) => {
	if (err) {
		console.error('Error => ', err);
	} else {
		console.log('Result => ', res);
	}
});
