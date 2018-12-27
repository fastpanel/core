/**
 * Container.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
/// <reference types="node" />
import { EventEmitter } from 'events';
import { Service } from './Service';
/**
 * Definition method a resolve service.
 */
export declare type ServiceDefinitionMethod = (container: Container, ...parameters: any[]) => any;
/**
 * Class Manager
 *
 * Is a component that implements Dependency Injection/Service location
 * of services and it's itself a container for them.
 *
 * @version 1.0.0
 */
export declare class Container extends EventEmitter {
    /**
     * Singleton instant container.
     */
    private static instance;
    /**
     * Services definition container.
     */
    protected services: {
        [index: string]: Service;
    };
    /**
     * Shared instances container.
     */
    protected sharedInstances: {
        [index: string]: any;
    };
    /**
     * Container constructor.
     */
    constructor();
    /**
     * Check whether the DI contains a service by a name.
     *
     * @param name Service name.
     */
    has(name: string): boolean;
    /**
     * Registers a service in the services container.
     *
     * @param name Service name.
     * @param definition Method a resolve service.
     * @param shared Resolve service oce (singleton).
     */
    set(name: string, definition: ServiceDefinitionMethod, shared?: boolean): Container;
    /**
     * Resolves the service based on its configuration.
     *
     * @param name Service name.
     * @param parameters Resolve service parameters.
     */
    get(name: string, ...parameters: any): any;
    /**
     * Return the services registered in the di.
     */
    getAll(): any;
    /**
     * Removes a service in the services container.
       * It also removes any shared instance created for the service.
     *
     * @param name Service name.
     */
    remove(name: string): Container;
    /**
     * Get singleton instant of container.
     */
    static getDefault(): Container;
}
