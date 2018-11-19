/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import Vorpal from 'vorpal';
import { EventEmitter } from 'events';
import { Config } from './../Config';
import { Container } from './../Di/Container';

/**
 * Class FactoryDefault
 * 
 * This is a variant of the standard Di for cli mode. 
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
    this.set('events', (container: Container) => {
      return new EventEmitter();
    }, true);
    
    /* Registered config component. */
    this.set('config', (container: Container) => {
      let path = (process.env.CONFIG_PATH) ? process.env.CONFIG_PATH : 'App/Config';
      return new Config(path, {Env: process.env});
    }, true);
    
    /* Registered cli handler component. */
    this.set('cli', (container: Container) => {
      let vorpal = new Vorpal();
      return vorpal;
    }, true);
  }

}

/* End of file FactoryDefault.ts */