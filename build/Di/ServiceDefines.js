"use strict";
/**
 * ServiceDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Injectable_1 = require("./Injectable");
/**
 * Class ServiceDefines
 *
 * Service abstract class.
 *
 * @version 1.0.0
 */
class ServiceDefines extends Injectable_1.Injectable {
    /**
     * ServiceDefines constructor.
     *
     * @param container Di container instant.
     */
    constructor(container = null) {
        super(container);
    }
    /**
     * ServiceDefines destructor.
     */
    destructor() { }
    /**
     * Registers a service provider.
     */
    async register() { }
}
exports.ServiceDefines = ServiceDefines;
/* End of file ServiceDefines.ts */ 
