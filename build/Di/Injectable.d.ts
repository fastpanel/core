/**
 * Injectable.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Container } from './Container';
/**
 * Class Injectable
 *
 * This class allows to access services in the services container
 * by just only accessing a public property with the same name of
 * a registered service.
 *
 * @version 1.0.0
 */
export declare class Injectable {
    /**
     * Dynamic property types.
     */
    [key: string]: any;
    /**
     * Di container.
     */
    protected _di: Container;
    /**
     * Injectable constructor.
     *
     * @param di Di container instant.
     */
    constructor(di?: Container);
    /**
     * Returns the internal dependency injector.
     */
    /**
    * Sets the dependency injector.
    */
    di: Container;
}
