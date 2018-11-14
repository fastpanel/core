/**
 * ServiceDefines.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
import { Container } from './Container';
import { Injectable } from './Injectable';
/**
 * Class ServiceDefines
 *
 * Service abstract class.
 *
 * @version 1.0.0
 */
export declare class ServiceDefines extends Injectable {
    /**
     * ServiceDefines constructor.
     *
     * @param container Di container instant.
     */
    constructor(container?: Container);
    /**
     * ServiceDefines destructor.
     */
    destructor(): void;
    /**
     * Registers a service provider.
     */
    register(): Promise<void>;
    /**
     * Startup a service provider.
     */
    startup(): Promise<void>;
}
