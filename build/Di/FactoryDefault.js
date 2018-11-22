"use strict";
/**
 * FactoryDefault.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const Config_1 = require("./../Config");
const Container_1 = require("./Container");
/**
 * Class FactoryDefault
 *
 * This is a variant of the standard Di.
 *
 * By default it automatically registers all the services
 * provided by the framework.
 *
 * Thanks to this, the developer does not need to register each service
 * individually providing a full stack framework.
 *
 * @version 1.0.0
 */
class FactoryDefault extends Container_1.Container {
    /**
     * FactoryDefault constructor.
     */
    constructor() {
        super();
        /* Registered event emitter component. */
        this.set('events', (container) => {
            return new events_1.EventEmitter();
        }, true);
        /* Registered config component. */
        this.set('config', (container) => {
            let path = (process.env.CONFIG_PATH) ? process.env.CONFIG_PATH : 'App/Config';
            return new Config_1.Config(path, { Env: process.env });
        }, true);
    }
}
exports.FactoryDefault = FactoryDefault;
/* End of file FactoryDefault.ts */ 
