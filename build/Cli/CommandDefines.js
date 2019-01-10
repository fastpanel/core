"use strict";
/**
 * CommandDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Di_1 = require("../Di");
/**
 * Class CommandDefines
 *
 * Command abstract class.
 *
 * @version 1.0.0
 */
class CommandDefines extends Di_1.Injectable {
    /**
     * CommandDefines constructor.
     *
     * @param di Di container instant.
     */
    constructor(di) {
        super(di);
    }
    /**
     * Initialize command.
     */
    initialize() { }
}
exports.CommandDefines = CommandDefines;
/* End of file CommandDefines.ts */ 
