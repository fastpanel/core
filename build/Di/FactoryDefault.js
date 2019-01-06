"use strict";
/**
 * FactoryDefault.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const Const_1 = require("./../Const");
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
        this.set('events', (di) => {
            return new events_1.EventEmitter();
        }, true);
        /* Registered config component. */
        this.set('config', (di) => {
            let path = (process.env.CONFIG_PATH) ? process.env.CONFIG_PATH : 'App/Config';
            return new Config_1.Config(path, { Env: process.env });
        }, true);
        /* Registered redis component. */
        this.set('redis', (di, params) => {
            let config = di
                .get('config')
                .get('Extensions/Redis', Const_1.REDIS_CONFIG);
            if (typeof params.host !== 'undefined' ||
                typeof params.hosts !== 'undefined') {
                config = params;
            }
            if (typeof config.host !== 'undefined') {
                return new ioredis_1.default((config.port) ? config.port : Const_1.REDIS_CONFIG.port, (config.host) ? config.host : Const_1.REDIS_CONFIG.host, (config.options) ? config.options : Const_1.REDIS_CONFIG.options);
            }
            else if (typeof config.hosts !== 'undefined') {
                return new ioredis_1.default.Cluster(config.hosts, { redisOptions: config.options });
            }
            else {
                return new ioredis_1.default(Const_1.REDIS_CONFIG.port, Const_1.REDIS_CONFIG.host, Const_1.REDIS_CONFIG.options);
            }
        }, false);
    }
}
exports.FactoryDefault = FactoryDefault;
/* End of file FactoryDefault.ts */ 
