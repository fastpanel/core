/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
import { Injectable, Container } from './Di';
/**
 * Class Application.
 *
 * A wrapper to combine all components into a single events context.
 *
 * @version 1.0.0
 */
export declare class Application extends Injectable {
    /**
     * Flag a app is ready.
     */
    startup: boolean;
    /**
     * Application constructor.
     *
     * @param container Di container instant.
     */
    constructor(container?: Container);
    /**
     * Initialization app.
     */
    init(): Promise<any>;
}
