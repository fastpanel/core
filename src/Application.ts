/**
 * Application.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { 
  Injectable,
  Container,
  IServiceDefines
} from './Di';
import ServiceMongoDB from './Services/MongoDB';
import ServiceRedis from './Services/Redis';
import ServiceWeb from './Services/Web';
import ServiceWebsocket from './Services/Websocket';

/**
 * Class Application.
 * 
 * A wrapper to combine all components into a single events context.
 * 
 * @version 1.0.0
 */
export class Application extends Injectable {
  
  /**
   * Flag a app is ready.
   */
  public startup: boolean = false;

  /**
   * List of installed services and add-ons.
   */
  protected services: Array<IServiceDefines> = [];

  /**
   * Global app timer.
   */
  protected timer: NodeJS.Timer = null;

  /**
   * Application constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);

    /* Linked self. */
    this.di.set('context', () => {
      return this;
    });

    /* Register core services. */
    this.addService(ServiceMongoDB);
    this.addService(ServiceRedis);
    this.addService(ServiceWeb);
    this.addService(ServiceWebsocket);
  }

  /**
   * Initialization app.
   */
  public async init () : Promise<any> {
    /* Register all services. */
    this.services.forEach(async (item: IServiceDefines) => {
      if (typeof item.register === 'function') {
        try {
          await item.register(this);
        } catch (error) {
          console.error(error);
        }
      }
    });

    /* Startup all services. */
    this.services.forEach(async (item: IServiceDefines) => {
      if (typeof item.startup === 'function') {
        try {
          await item.startup(this);
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  /**
   * Add a service object to the list of running.
   * 
   * @param service Target service object.
   */
  public addService (service: IServiceDefines) : Application {
    this.services.push(service);
    return this;
  }

  /**
   * Add a service by name to the list of running.
   * 
   * @param service Target service name.
   */
  public addExternalService (service: string) : Application {
    let instant: IServiceDefines = require(service);
    this.services.push(instant);
    return this;
  }

}

/* End of file Application.ts */