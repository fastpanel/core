/**
 * CommandDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
import Winston from 'winston';
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
/**
 * The method determines the async subscription
 * for the execution queue by the command.
 */
export declare type CommandSubscriptionDefines = (args: {
    [k: string]: any;
}, options: {
    [k: string]: any;
}, logger: Winston.Logger) => Promise<any>;
