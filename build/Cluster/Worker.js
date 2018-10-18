"use strict";
/**
 * Worker.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("../Application");
/**
 * Class Worker
 *
 * Cluster worker (unit).
 *
 * @version 1.0.0
 */
class Worker extends Application_1.Application {
    /**
     * Worker constructor.
     *
     * @param container Di container instant.
     */
    constructor(container) {
        super(container);
    }
    /**
     * Initialization worker.
     */
    async init() {
        await super.init();
    }
}
exports.Worker = Worker;
/* End of file Worker.ts */ 
