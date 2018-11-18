/**
 * ServiceDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
import Application from '../Application';
/**
 * Interface IServiceDefines
 *
 * Defines a set of methods for working with services.
 *
 * @version 1.0.0
 */
export interface IServiceDefines {
    /**
     * Registers a service provider.
     */
    register(context: Application): Promise<any>;
    /**
     * Startup a service provider.
     */
    startup(context: Application): Promise<any>;
}
