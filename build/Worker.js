"use strict";
/**
 * Worker.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Di_1 = require("./Di");
/**
 * Class Worker
 *
 * Worker to combine all components into a single events context.
 *
 * @version 1.0.0
 */
class Worker extends Di_1.Injectable {
    /**
     * Worker constructor.
     */
    constructor(container) {
        super(container);
        /**
         * Flag a worker is ready.
         */
        this.startup = false;
        /* Linked self. */
        this.di.set('context', () => {
            return this;
        });
    }
    /**
     * Initialization worker.
     */
    async init() { }
}
exports.Worker = Worker;
/* End of file Worker.ts */ 
