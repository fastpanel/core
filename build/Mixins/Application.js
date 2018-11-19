"use strict";
/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class Application.
 *
 * A app mixin.
 *
 * @version 1.0.0
 */
exports.Application = (superClass) => class extends superClass {
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
    }
    /**
     * Initialization app.
     */
    async init() { }
};
/* End of file Application.ts */ 
