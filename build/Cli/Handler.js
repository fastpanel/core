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
 * Cli handler.
 *
 * @version 1.0.0
 */
class Handler extends Application_1.Application {
    /**
     * Handler constructor.
     *
     * @param di Di container instant.
     */
    constructor(di) {
        super(di);
    }
    /**
     * Initialization cli handler.
     */
    async init() {
        /* Call parent. */
        await super.init();
        /* Fire event. */
        this.events.emit('cli:getCommands', this.cli);
        /* Set ready flag. */
        this.isStartup = true;
        /* Startup cli handler. */
        this.cli
            .delimiter('>')
            .show()
            .parse(process.argv);
    }
}
exports.Handler = Handler;
/* End of file Handler.ts */ 
