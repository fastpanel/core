"use strict";
/**
 * WinstonVorpalTransport.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_transport_1 = __importDefault(require("winston-transport"));
const triple_beam_1 = require("triple-beam");
;
/**
 *
 */
class WinstonVorpalTransport extends winston_transport_1.default {
    /**
     *
     * @param opts
     */
    constructor(opts) {
        super(opts);
        /**
         *
         */
        this.cli = null;
        if (!opts.cli) {
            throw new Error('Unable to write log without an "Vorpal" instance.');
        }
        this.cli = opts.cli;
    }
    /**
     *
     * @param opts
     */
    log(info, next) {
        this.cli.log(info[triple_beam_1.MESSAGE]);
        next();
    }
}
exports.WinstonVorpalTransport = WinstonVorpalTransport;
;
/* End of file WinstonVorpalTransport.ts */ 
