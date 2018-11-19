"use strict";
/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Di_1 = require("./../Di");
const Mixins_1 = require("./../Mixins");
const Utils_1 = require("./../Utils");
/**
 * Class Handler
 *
 * Cluster worker (unit) handler.
 *
 * @version 1.0.0
 */
class Handler extends Utils_1.Mixer(Di_1.Injectable).with(Mixins_1.Application, Mixins_1.ExtensionsManager) {
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
