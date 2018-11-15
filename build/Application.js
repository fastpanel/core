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
const MongoDB_1 = __importDefault(require("./Services/MongoDB"));
const Redis_1 = __importDefault(require("./Services/Redis"));
const Web_1 = __importDefault(require("./Services/Web"));
const Websocket_1 = __importDefault(require("./Services/Websocket"));
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
         * List of installed services and add-ons.
         */
        this.services = [];
        /* Linked self. */
        this.di.set('context', () => {
            return this;
        });
        /* Register core services. */
        this.addService(MongoDB_1.default);
        this.addService(Redis_1.default);
        this.addService(Web_1.default);
        this.addService(Websocket_1.default);
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
