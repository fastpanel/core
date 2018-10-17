/**
 * Worker.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
import { Injectable, Container } from './Di';
/**
 * Class Worker
 *
 * Worker to combine all components into a single events context.
 *
 * @version 1.0.0
 */
export declare class Worker extends Injectable {
    /**
     * Flag a worker is ready.
     */
    startup: boolean;
    /**
     * Worker constructor.
     */
    constructor(container?: Container);
    /**
     * Initialization worker.
     */
    init(): Promise<void>;
}
