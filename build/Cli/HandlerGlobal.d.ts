/**
 * HandlerGlobal.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
import { Container } from './../Di';
import { Application } from './../Application';
/**
 * Class HandlerGlobal
 *
 * Cli global handler.
 *
 * @version 1.0.0
 */
export declare class HandlerGlobal extends Application {
    /**
     * HandlerGlobal constructor.
     *
     * @param di Di container instant.
     */
    constructor(di?: Container);
    /**
     * Initialization cli global handler.
     */
    init(): Promise<any>;
}
