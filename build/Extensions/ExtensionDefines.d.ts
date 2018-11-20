/**
 * ExtensionDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Container, Injectable } from "../Di";
/**
 * Class ExtensionDefines
 *
 * Extension abstract class.
 *
 * @version 1.0.0
 */
export declare class ExtensionDefines extends Injectable {
    /**
     * ExtensionDefines constructor.
     *
     * @param container Di container instant.
     */
    constructor(container?: Container);
    /**
     * Registers a service provider.
     */
    register(): Promise<any>;
    /**
     * Startup a service provider.
     */
    startup(): Promise<any>;
}
