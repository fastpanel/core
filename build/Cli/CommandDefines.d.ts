/**
 * CommandDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Injectable, Container } from "../Di";
/**
 * Class CommandDefines
 *
 * Command abstract class.
 *
 * @version 1.0.0
 */
export declare class CommandDefines extends Injectable {
    /**
     * CommandDefines constructor.
     *
     * @param di Di container instant.
     */
    constructor(di?: Container);
    /**
     * Initialize command.
     */
    initialize(): void;
}
