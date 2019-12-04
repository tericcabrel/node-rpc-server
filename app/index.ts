import * as path from 'path';
import * as fs from 'fs';

const rpc = require('node-json-rpc');

const options = {
  // int port of rpc server, default 5080 for http or 5433 for https
  port: 7016,
  // string domain name or ip of rpc server, default '127.0.0.1'
  host: '127.0.0.1',
  // string with default path, default '/'
  path: '/',
  // boolean false to turn rpc checks off, default true
  strict: true,
};

// Create a server object with options
const server = new rpc.Server(options);

// Add your methods
server.addMethod('domain_name', (params: any[], callback: Function) => {
  const servicePath: string = path.join(`${__dirname}`, '../public/service.json');

  console.log('service => ', servicePath);
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
