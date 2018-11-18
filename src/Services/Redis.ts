/**
 * Redis.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import Redis from 'ioredis';
import * as Cli from '../Cli';
import * as Cluster from '../Cluster';
import { Container } from '../Di';

const defaultConfig = {
  host: '127.0.0.1',
  port: 6379,
  options: {
    family: 4,
    password: '',
    db: 0,
    keyPrefix: 'fastpanel:'
  }
};

export default {
  async register (context: Cli.Handler | Cluster.Handler) : Promise<any> {
    context.di.set('redis', (container: Container, params: any) => {
      let config: any = defaultConfig;

      if (params) {
        config = params;
      }

      if (typeof config.host !== 'undefined') {
        return new Redis(
          (config.port) ? config.port : defaultConfig.port,
          (config.host) ? config.host : defaultConfig.host,
          (config.options) ? config.options : defaultConfig.options
        );
      } else if (typeof config.hosts !== 'undefined') {
        return new Redis.Cluster(
          config.hosts,
          { redisOptions: config.options }
        );
      } else {
        return null;
      }
    }, false);
  },
  async startup (context: Cli.Handler | Cluster.Handler) : Promise<any> {
    /* Fire redis startup event. */
    context.events.emit('redis:startup');
  }
};

/* End of file Redis.ts */