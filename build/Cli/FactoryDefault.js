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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const caporal_1 = __importDefault(require("caporal"));
const inquirer_1 = __importDefault(require("inquirer"));
const prettyjson_1 = __importDefault(require("prettyjson"));
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const Factory = __importStar(require("./../Di/FactoryDefault"));
/**
 * Class FactoryDefault
 *
 * This is a variant of the standard Di for cli mode.
 *
 * @version 1.0.0
 */
class FactoryDefault extends Factory.FactoryDefault {
    /**
     * FactoryDefault constructor.
     */
    constructor() {
        super();
        /* Registered logger component. */
        this.set('logger', (di) => {
            /* Get config instant. */
            const config = di.get('config');
            /* Init logger lib. */
            let logger = winston_1.default.createLogger({
                transports: [
                    new winston_1.default.transports.Console({
                        handleExceptions: true,
                        format: winston_1.default.format.combine(winston_1.default.format.colorize({
                            all: true
                        }), winston_1.default.format.printf((info) => {
                            const { level, message, ...extra } = info;
                            return `${message} ${Object.keys(extra).length ? os_1.EOL + prettyjson_1.default.render(extra) + os_1.EOL : ''}`;
                        }))
                    }),
                    new winston_daily_rotate_file_1.default({
                        level: (process.env.NODE_ENV !== 'production' ? 'silly' : 'warn'),
                        handleExceptions: true,
                        format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
                        dirname: config.get('Env.LOGGER_PATH', 'App/Logs') + '/Cli',
                        filename: '%DATE%.log',
                        datePattern: 'YYYY-MM-DD'
                    })
                ],
                exitOnError: false
            });
            return logger;
        }, true);
        /* Registered cli interactive interface. */
        this.set('prompt', (di) => {
            return inquirer_1.default.prompt;
        }, false);
        /* Registered cli handler component. */
        this.set('cli', (di) => {
            /* Get config instant. */
            const config = di.get('config');
            /* Init cli lib. */
            caporal_1.default
                .bin(config.get('Env.APP_CLI_BIN', config.get('App.cliBin', 'node build/cli.js')))
                .name(config.get('Env.APP_NAME', config.get('App.name', 'fastPanel')))
                .version(config.get('Env.APP_VERSION', '1.0.0'))
                .logger(di.get('logger'));
            return caporal_1.default;
        }, true);
    }
}
exports.FactoryDefault = FactoryDefault;
/* End of file FactoryDefault.ts */ 
