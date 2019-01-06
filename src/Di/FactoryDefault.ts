/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import Redis from 'ioredis';
import { REDIS_CONFIG } from './../Const';
import { EventEmitter } from 'events';
import { Config } from './../Config';
import { Container } from './Container';

/**
 * Class FactoryDefault
 * 
 * This is a variant of the standard Di.
 * 
 * By default it automatically registers all the services 
 * provided by the framework.
 * 
 * Thanks to this, the developer does not need to register each service 
 * individually providing a full stack framework.
 * 
 * @version 1.0.0
 */
export class FactoryDefault extends Container {

  /**
   * FactoryDefault constructor.
   */
  public constructor () {
    super();
    
    /* Registered event emitter component. */
    this.set('events', (di: Container) => {
      return new EventEmitter();
    }, true);
    
    /* Registered config component. */
    this.set('config', (di: Container) => {
      let path = (process.env.CONFIG_PATH) ? process.env.CONFIG_PATH : 'App/Config';
      return new Config(path, {Env: process.env});
    }, true);
    
    /* Registered redis component. */
    this.set('redis', (di: Container, params: any) => {
      let config: any = di
        .get('config')
        .get('Extensions/Redis', REDIS_CONFIG);

      if (
        typeof params.host !== 'undefined' || 
        typeof params.hosts !== 'undefined'
      ) {
        config = params;
      }

      if (typeof config.host !== 'undefined') {
        return new Redis(
          (config.port) ? config.port : REDIS_CONFIG.port,
          (config.host) ? config.host : REDIS_CONFIG.host,
          (config.options) ? config.options : REDIS_CONFIG.options
        );
      } else if (typeof config.hosts !== 'undefined') {
        return new Redis.Cluster(
          config.hosts,
          { redisOptions: config.options }
        );
      } else {
        return new Redis(
          REDIS_CONFIG.port,
          REDIS_CONFIG.host,
          REDIS_CONFIG.options
        );
      }
    }, false);
  }

}

/* End of file FactoryDefault.ts */