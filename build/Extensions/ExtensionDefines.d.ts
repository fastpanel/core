/**
 * ExtensionDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Container } from "../Di";
/**
 * Class ExtensionDefines
 *
 * Extension abstract class.
 *
 * @version 1.0.0
 */
export declare class ExtensionDefines {
    /**
     * Registers a service provider.
     */
    register(di: Container): Promise<any>;
    /**
     * Startup a service provider.
     */
    startup(di: Container): Promise<any>;
}
