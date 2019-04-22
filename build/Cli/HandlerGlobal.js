"use strict";
/**
 * HandlerGlobal.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = require("./../Application");
/**
 * Class HandlerGlobal
 *
 * Cli global handler.
 *
 * @version 1.0.0
 */
class HandlerGlobal extends Application_1.Application {
    /**
     * HandlerGlobal constructor.
     *
     * @param di Di container instant.
     */
    constructor(di) {
        super(di);
    }
    /**
     * Initialization cli global handler.
     */
    async init() {
        /* Call parent. */
        await super.init();
        /* Fire event. */
        this.events.emit('cli:getCommands', this.cli);
        /* Set ready flag. */
        this.isStartup = true;
        /* Startup cli handler. */
        await this.cli.parse(process.argv);
        /* Close all connections. */
        process.exit(0);
    }
}
exports.HandlerGlobal = HandlerGlobal;
/* End of file HandlerGlobal.ts */ 
