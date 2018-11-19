"use strict";
/**
 * Service.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
  * Class Service.
  *
  * Represents individually a service in the services container.
  *
  * @version 1.0.0
  */
class Service {
    /**
     * Service constructor.
     *
     * @param name Service name.
     * @param definition Method a resolve service.
     * @param shared Resolve service once (singleton).
     */
    constructor(name, definition, shared = false) {
        /**
         * Service name.
         */
        this.name = null;
        /**
         * Method a resolve service.
         */
        this.definition = null;
        /**
         * Resolve service once (singleton).
         */
        this.shared = false;
        this.name = name;
        this.definition = definition;
        this.shared = shared;
    }
}
exports.Service = Service;
/* End of file Service.ts */ 
