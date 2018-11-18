"use strict";
/**
 * Redis.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const defaultConfig = {
    host: '127.0.0.1',
    port: 6379,
    options: {
        family: 4,
        password: '',
        db: 0,
        keyPrefix: 'fastpanel:'
    }
};
exports.default = {
    async register(context) {
        context.di.set('redis', (container, params) => {
            let config = defaultConfig;
            if (params) {
                config = params;
            }
            if (typeof config.host !== 'undefined') {
                return new ioredis_1.default((config.port) ? config.port : defaultConfig.port, (config.host) ? config.host : defaultConfig.host, (config.options) ? config.options : defaultConfig.options);
            }
            else if (typeof config.hosts !== 'undefined') {
                return new ioredis_1.default.Cluster(config.hosts, { redisOptions: config.options });
            }
            else {
                return null;
            }
        }, false);
    },
    async startup(context) {
        /* Fire redis startup event. */
        context.events.emit('redis:startup');
    }
};
/* End of file Redis.ts */ 
