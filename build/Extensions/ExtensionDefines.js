"use strict";
/**
 * ExtensionDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Di_1 = require("../Di");
/**
 * Class ExtensionDefines
 *
 * Extension abstract class.
 *
 * @version 1.0.0
 */
class ExtensionDefines extends Di_1.Injectable {
    /**
     * ExtensionDefines constructor.
     *
     * @param di Di container instant.
     */
    constructor(di) {
        super(di);
    }
    /**
     * Registers a service provider.
     */
    async register() { }
    /**
     * Startup a service provider.
     */
    async startup() { }
}
exports.ExtensionDefines = ExtensionDefines;
/* End of file ExtensionDefines.ts */ 
