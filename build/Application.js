"use strict";
/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Di_1 = require("./Di");
const Network_1 = __importDefault(require("./Services/Network"));
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
        /**
         * Global app timer.
         */
        this.timer = null;
        /**
         * List of installed services and add-ons.
         */
        this.services = [];
    }
    /**
     * Initialization app.
     */
    async init() {
        /* Register core services. */
        this.addService(Network_1.default);
        /* Register all services. */
        this.services.forEach(async (item) => {
            if (typeof item.register === 'function') {
                try {
                    await item.register(this);
                }
                catch (error) {
                    console.error(error);
                }
            }
        });
        /* Startup all services. */
        this.services.forEach(async (item) => {
            if (typeof item.startup === 'function') {
                try {
                    await item.startup(this);
                }
                catch (error) {
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
exports.default = Application;
/* End of file Application.ts */ 
