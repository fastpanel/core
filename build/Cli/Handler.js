"use strict";
/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("../Application");
/**
 * Class Handler
 *
 * Cli handler.
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
     * Initialization cli handler.
     */
    async init() {
        await super.init();
        /* Set ready flag. */
        this.startup = true;
        /* Startup cli handler. */
        this.cli
            .delimiter('=>')
            .show();
    }
}
exports.Handler = Handler;
/* End of file Handler.ts */ 
