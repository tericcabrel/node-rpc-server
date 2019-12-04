import { Service } from './service';
import * as path from 'path';
import * as fs from 'fs';

const rpc = require('@hamjs/rpc-server');

rpc.listen(7016, () => {
  console.log('RPC server is running...');
});

rpc.def('domain_name', (serviceName: string) => {
  const servicePath: string = path.join(`${__dirname}`, '../public/service.json');

  console.log('service => ', servicePath);
  const content: string = fs.readFileSync(servicePath, { encoding: 'utf8' });

  try {
    const services: { [key: string]: string } = JSON.parse(content);

    return services[serviceName] ? services[serviceName] : null;
  } catch (e) {
    console.error('JSON Parse error: ', e);
  }

  return null;
});
