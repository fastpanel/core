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
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const Factory = __importStar(require("./../Di/FactoryDefault"));
/**
 * Class FactoryDefault
 *
 * This is a variant of the standard Di for cluster mode.
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
            let logger = winston_1.default.createLogger({
                transports: [
                    new winston_1.default.transports.Console({
                        handleExceptions: true,
                        format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.printf(info => `${info.message}`))
                    }),
                    new winston_daily_rotate_file_1.default({
                        dirname: (process.env.LOGGER_PATH) ? process.env.LOGGER_PATH : 'App/Logs',
                        filename: 'worker-%DATE%.log',
                        datePattern: 'YYYY-MM-DD'
                    })
                ],
                exitOnError: false
            });
            return logger;
        }, true);
    }
}
exports.FactoryDefault = FactoryDefault;
/* End of file FactoryDefault.ts */ 
