/**
 * Worker.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
import { Application } from '../Application';
import { Container } from '../Di';
/**
 * Class Worker
 *
 * Cluster worker (unit).
 *
 * @version 1.0.0
 */
export declare class Worker extends Application {
    /**
     * Worker constructor.
     *
     * @param container Di container instant.
     */
    constructor(container?: Container);
    /**
     * Initialization worker.
     */
    init(): Promise<any>;
}
