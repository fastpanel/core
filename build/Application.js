"use strict";
/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
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
     * @param container Di container instant.
     */
    constructor(container) {
        super(container);
        /**
         * Flag a app is ready.
         */
        this.isStartup = false;
        /**
         * List of installed extensions and add-ons.
         */
        this.extensions = [];
    }
    /**
     * Initialization app.
     */
    async init() { }
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
            let instant = new extension(this.di);
            this.extensions.push(instant);
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.Application = Application;
/* End of file Application.ts */ 
