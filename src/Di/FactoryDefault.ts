/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { Config } from './../Config';
import { Container } from './Container';
import { Collection } from './../Extensions/Collection';
import { EventEmitter } from 'events';

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
      let events = new EventEmitter();
      events.setMaxListeners(0);
      return events;
    }, true);
    
    /* Registered config component. */
    this.set('config', (di: Container) => {
      let path = (process.env.CONFIG_PATH) ? process.env.CONFIG_PATH : 'App/Config';
      return new Config(path, {Env: process.env});
    }, true);

    /* Registered extensions menage. */
    this.set('extensions', (di: Container) => {
      let collection = new Collection(
        di,
        di.get('config').get('Boot', [])
      );
      return collection;
    }, true);
  }

}

/* End of file FactoryDefault.ts */