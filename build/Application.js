"use strict";
/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Di_1 = require("./Di");
/**
 * Class Application
 *
 * Wrap for apps.
 *
 * @version 1.0.0
 */
class Application extends Di_1.Injectable {
    /* ----------------------------------------------------------------------- */
    /**
     * Application constructor.
     *
     * @param di Di container instant.
     */
    constructor(di) {
        super(di);
        /**
         * Flag a app is ready.
         */
        this.isStartup = false;
        /* Linked self. */
        this.di.set('context', () => {
            return this;
        }, true);
    }
    /**
     * Initialization app.
     */
    async init() {
        /* Initial watchdog timer. */
        this.watchdogTimer = setInterval(() => {
            this.events.emit('app:watchdog', this);
        }, 1000);
    }
}
exports.Application = Application;
/* End of file Application.ts */ 
