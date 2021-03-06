/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
import { Container } from './../Di';
import { Application } from './../Application';
/**
 * Class Handler
 *
 * Cluster worker (unit) handler.
 *
 * @version 1.0.0
 */
export declare class Handler extends Application {
    /**
     * Handler constructor.
     *
     * @param di Di container instant.
     */
    constructor(di?: Container);
    /**
     * Initialization worker handler.
     */
    init(): Promise<any>;
}
