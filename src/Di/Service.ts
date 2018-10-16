/**
 * Service.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { ServiceDefinitionMethod } from './Container';

/**
  * Class Service.
  * 
  * Represents individually a service in the services container.
  * 
  * @version 1.0.0
  */
export class Service {

  /**
   * Service name.
   */
  public name: string = null;

  /**
   * Method a resolve service.
   */
  public definition: ServiceDefinitionMethod = null;

  /**
   * Resolve service once (singleton).
   */
  public shared: boolean = false;

  /**
   * Service constructor.
   * 
   * @param name Service name.
   * @param definition Method a resolve service.
   * @param shared Resolve service once (singleton).
   */
  public constructor (name: string, definition: ServiceDefinitionMethod, shared: boolean = false) {
    this.name = name;
    this.definition = definition;
    this.shared = shared;
  }

}

/* End of file Service.ts */