/**
 * Service.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
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
export declare class Service {
    /**
     * Service name.
     */
    name: string;
    /**
     * Method a resolve service.
     */
    definition: ServiceDefinitionMethod;
    /**
     * Resolve service once (singleton).
     */
    shared: boolean;
    /**
     * Service constructor.
     *
     * @param name Service name.
     * @param definition Method a resolve service.
     * @param shared Resolve service once (singleton).
     */
    constructor(name: string, definition: ServiceDefinitionMethod, shared?: boolean);
}
