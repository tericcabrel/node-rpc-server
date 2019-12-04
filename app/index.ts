import * as path from 'path';
import * as fs from 'fs';

const rpc: any = require('node-json-rpc');

const options: any = {
	port: 7016,
	host: '127.0.0.1',
	path: '/',
	strict: false,
};

// Create a server object with options
const server: any = new rpc.Server(options);

// Add a method to get a domain name
server.addMethod('domain_name', (params: any[], callback: Function) => {
	const servicePath: string = path.join(`${__dirname}`, '../public/service.json');

	const content: string = fs.readFileSync(servicePath, { encoding: 'utf8' });

	try {
		const services: { [key: string]: string } = JSON.parse(content);

		callback(null, services[params[0]] ? services[params[0]] : null);
	} catch (e) {
		console.error('JSON Parse error: ', e);

		callback('Unexpected error!', null);
	}
});

// Start the server
server.start((error: any) => {
	if (error) throw error;

	console.log('RPC Server is running...');
});
