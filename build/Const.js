"use strict";
/**
 * Const.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
/**
 * Full path to the file with the list of installed add-ons.
 */
exports.BOOT_FILE = path_1.default.resolve((process.env.APP_PATH) ? process.env.APP_PATH : 'App') + path_1.default.sep + 'boot.json';
/**
 * Default redis config.
 */
exports.REDIS_CONFIG = {
    host: '127.0.0.1',
    port: 6379,
    options: {
        family: 4,
        password: '',
        db: 0,
        keyPrefix: 'fastpanel:'
    }
};
/* End of file Const.ts */ 
