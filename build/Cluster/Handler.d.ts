/**
 * Handler.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Container } from './../Di';
declare const Handler_base: any;
/**
 * Class Handler
 *
 * Cluster worker (unit) handler.
 *
 * @version 1.0.0
 */
export declare class Handler extends Handler_base {
    /**
     * Handler constructor.
     *
     * @param container Di container instant.
     */
    constructor(container?: Container);
    /**
     * Initialization worker handler.
     */
    init(): Promise<any>;
}
export {};
