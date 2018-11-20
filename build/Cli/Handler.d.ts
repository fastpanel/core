/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Application } from './../Application';
import { Container } from './../Di';
/**
 * Class Handler
 *
 * Cli handler.
 *
 * @version 1.0.0
 */
export declare class Handler extends Application {
    /**
     * Handler constructor.
     *
     * @param container Di container instant.
     */
    constructor(container?: Container);
    /**
     * Initialization cli handler.
     */
    init(): Promise<any>;
}
