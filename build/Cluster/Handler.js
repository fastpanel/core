"use strict";
/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(require("./../Application"));
/**
 * Class Handler
 *
 * Cluster worker (unit) handler.
 *
 * @version 1.0.0
 */
class Handler extends Application_1.default {
    /**
     * Handler constructor.
     *
     * @param container Di container instant.
     */
    constructor(container) {
        super(container);
    }
    /**
     * Initialization worker handler.
     */
    async init() {
        await super.init();
        /* Set ready flag. */
        this.startup = true;
    }
}
module.exports = Handler;
/* End of file Handler.ts */ 
