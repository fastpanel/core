"use strict";
/**
 * ExtensionsManager.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionsManager = (superClass) => class extends superClass {
    /**
     * Application constructor.
     *
     * @param container Di container instant.
     */
    constructor(container) {
        super(container);
        /**
         * List of installed extensions and add-ons.
         */
        this.extensions = [];
    }
    /**
     * Initialization app.
     */
    async init() {
        await super.init();
    }
    /**
     * Registers a service providers.
     */
    async register() {
        /* Register all extensions. */
        for (const extension of this.extensions) {
            if (typeof extension.register === 'function') {
                try {
                    await extension.register(this.di);
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
                    await extension.startup(this.di);
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
            let instant = new extension();
            this.extensions.push(instant);
        }
        catch (error) {
            console.error(error);
        }
    }
};
/* End of file ExtensionsManager.ts */ 
