import * as fs from 'fs';
import * as path from 'path';

class Service {
  public static init (rpc: any): void {
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
  }
}

export { Service };
