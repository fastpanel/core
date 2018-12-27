/**
 * FactoryDefault.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Container } from './Container';
/**
 * Class FactoryDefault
 *
 * This is a variant of the standard Di.
 *
 * By default it automatically registers all the services
 * provided by the framework.
 *
 * Thanks to this, the developer does not need to register each service
 * individually providing a full stack framework.
 *
 * @version 1.0.0
 */
export declare class FactoryDefault extends Container {
    /**
     * FactoryDefault constructor.
     */
    constructor();
}
