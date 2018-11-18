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

import ServiceRedis from './Services/Redis';
import ServiceMongoDB from './Services/MongoDB';
import ServiceNetwork from './Services/Network';

/**
 * Class Application.
 * 
 * A wrapper to combine all components into a single events context.
 * 
 * @version 1.0.0
 */
export default class Application extends Injectable {
  
  /**
   * Flag a app is ready.
   */
  public startup: boolean = false;
  
  /**
   * Global app timer.
   */
  protected timer: NodeJS.Timer = null;

  /**
   * List of installed services and add-ons.
   */
  protected services: Array<IServiceDefines> = [];

  /**
   * Application constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);
  }

  /**
   * Initialization app.
   */
  public async init () : Promise<any> {
    /* Register core services. */
    this.addService(ServiceNetwork);

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