"use strict";
/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("./../Application");
/**
 * Class Handler
 *
 * Cluster worker (unit) handler.
 *
 * @version 1.0.0
 */
class Handler extends Application_1.Application {
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
        /* Call parent. */
        await super.init();
        /* Registers a service providers. */
        await this.register();
        /* Startup a service providers. */
        await this.startup();
        /* Set ready flag. */
        this.isStartup = true;
    }
}
exports.Handler = Handler;
/* End of file Handler.ts */ 
