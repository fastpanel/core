"use strict";
/**
 * MongoDB.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
/* Set mongoose options. */
mongoose_1.default.Promise = global.Promise;
exports.default = {
    async register(context) {
        /* Forming the connection address. */
        let url = "mongodb://"
            + context.config.get('Services/Database.host', '127.0.0.1')
            + ":" + context.config.get('Services/Database.port', 27017);
        /* Connect to database. */
        await mongoose_1.default.connect(url, {
            /*  */
            user: context.config.get('Services/Database.user', null),
            pass: context.config.get('Services/Database.pass', null),
            dbName: context.config.get('Services/Database.dbName', 'fastPanel'),
            /*  */
            autoReconnect: context.config.get('Services/Database.autoReconnect', true),
            reconnectTries: context.config.get('Services/Database.reconnectTries', Number.MAX_VALUE),
            reconnectInterval: context.config.get('Services/Database.reconnectInterval', 500),
            poolSize: context.config.get('Services/Database.poolSize', 10),
            /*  */
            promiseLibrary: global.Promise,
            useNewUrlParser: true
        });
        /* Register connection object. */
        context.di.set('db', (container) => {
            return mongoose_1.default.connection;
        }, false);
    },
    async startup(context) {
        /* Fire db startup event. */
        context.events.emit('db:startup');
    }
};
/* End of file MongoDB.ts */ 
