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
        /**
         * List of installed extensions and add-ons.
         */
        this.extensions = [];
        /* Linked self. */
        this.di.set('context', () => {
            return this;
        }, true);
    }
    /**
     * Initialization app.
     */
    async init() {
        /* Registers a service providers. */
        await this.register();
        /* Startup a service providers. */
        await this.startup();
        /* Initial watchdog timer. */
        this.watchdogTimer = setInterval(() => {
            this.events.emit('app:watchdog', this);
        }, 1000);
    }
    /**
     * Registers a service providers.
     */
    async register() {
        /* Register all extensions. */
        for (const extension of this.extensions) {
            if (typeof extension.register === 'function') {
                try {
                    await extension.register();
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
    }
    /**
     * Startup a service providers.
     */
    async startup() {
        /* Startup all extensions. */
        for (const extension of this.extensions) {
            if (typeof extension.startup === 'function') {
                try {
                    await extension.startup();
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
    }
    /**
     * Add a extension object to the list of running.
     *
     * @param extension Target extension class.
     */
    addExtension(extension) {
        try {
            if (typeof extension.Extension !== 'undefined') {
                let ExtObject = extension.Extension;
                let instant = new ExtObject(this.di);
                this.extensions.push(instant);
            }
        }
        catch (error) {
            console.error(error);
        }
        return this;
    }
}
exports.Application = Application;
/* End of file Application.ts */ 
