"use strict";
/**
 * Container.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const Service_1 = require("./Service");
/**
 * Class Manager
 *
 * Is a component that implements Dependency Injection/Service location
 * of services and it's itself a container for them.
 *
 * @version 1.0.0
 */
class Container extends events_1.EventEmitter {
    /* ----------------------------------------------------------------------- */
    /**
     * Container constructor.
     */
    constructor() {
        super();
        /* ----------------------------------------------------------------------- */
        /**
         * Services definition container.
         */
        this.services = {};
        /**
         * Shared instances container.
         */
        this.sharedInstances = {};
        /* Set listeners limit. */
        this.setMaxListeners(0);
        /* Set default di. */
        if (!Container.instance) {
            Container.instance = this;
        }
    }
    /* ----------------------------------------------------------------------- */
    /**
     * Check whether the DI contains a service by a name.
     *
     * @param name Service name.
     */
    has(name) {
        return (this.services[name]) ? true : false;
    }
    /**
     * Registers a service in the services container.
     *
     * @param name Service name.
     * @param definition Method a resolve service.
     * @param shared Resolve service oce (singleton).
     */
    set(name, definition, shared = false) {
        /* Check shared service and clear. */
        if (this.services[name] && this.services[name].shared) {
            if (this.sharedInstances[name]) {
                delete this.sharedInstances[name];
            }
        }
        /* Add service to container. */
        this.services[name] = new Service_1.Service(name, definition, shared);
        /* Send event on new service registered. */
        this.emit('set', name);
        /* Send self. */
        return this;
    }
    /**
     * Resolves the service based on its configuration.
     *
     * @param name Service name.
     * @param parameters Resolve service parameters.
     */
    get(name, ...parameters) {
        /* Check service. */
        if (!this.services[name]) {
            throw new Error('Service with the name "' + name + '" does not exist.');
        }
        /* Get service item. */
        let service = this.services[name];
        /* Check shared service. */
        if (service.shared && this.sharedInstances[name]) {
            return this.sharedInstances[name];
        }
        else {
            /* Service container. */
            let instance = null;
            /* Get service instant. */
            if (typeof service.definition === 'function') {
                instance = service.definition(this, parameters);
            }
            else {
                throw new Error('Incorrect definition for service "' + name + '".');
            }
            /* Send service instant. */
            if (service.shared) {
                return this.sharedInstances[name] = instance;
            }
            else {
                return instance;
            }
        }
    }
    /**
     * Return the services registered in the di.
     */
    getAll() {
        return this.services;
    }
    /**
     * Removes a service in the services container.
       * It also removes any shared instance created for the service.
     *
     * @param name Service name.
     */
    remove(name) {
        /* Check service. */
        if (this.services[name]) {
            /* Remove shared instant. */
            if (this.services[name].shared && this.sharedInstances[name]) {
                delete this.sharedInstances[name];
            }
            /* Remove service definition. */
            delete this.services[name];
        }
        /* Send self. */
        return this;
    }
    /* ----------------------------------------------------------------------- */
    /**
     * Get singleton instant of container.
     */
    static getDefault() {
        return Container.instance || (Container.instance = new Container());
    }
}
/**
 * Singleton instant container.
 */
Container.instance = null;
exports.Container = Container;
/* End of file Container.ts */ 
