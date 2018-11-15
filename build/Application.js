"use strict";
/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Di_1 = require("./Di");
/**
 * Class Application.
 *
 * A wrapper to combine all components into a single events context.
 *
 * @version 1.0.0
 */
class Application extends Di_1.Injectable {
    /**
     * Application constructor.
     *
     * @param container Di container instant.
     */
    constructor(container) {
        super(container);
        /**
         * Flag a app is ready.
         */
        this.startup = false;
        /* Linked self. */
        this.di.set('context', () => {
            return this;
        });
    }
    /**
     * Initialization app.
     */
    async init() { }
    /**
     * Add a service object to the list of running.
     *
     * @param service Target service object.
     */
    addService(service) {
        this.services.push(service);
        return this;
    }
    /**
     * Add a service by name to the list of running.
     *
     * @param service Target service name.
     */
    addExternalService(service) {
        let instant = require(service);
        this.services.push(instant);
        return this;
    }
}
exports.Application = Application;
/* End of file Application.ts */ 
