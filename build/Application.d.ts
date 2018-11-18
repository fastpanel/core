/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
/// <reference types="node" />
import { Injectable, Container, IServiceDefines } from './Di';
/**
 * Class Application.
 *
 * A wrapper to combine all components into a single events context.
 *
 * @version 1.0.0
 */
export default class Application extends Injectable {
    /**
     * Flag a app is ready.
     */
    startup: boolean;
    /**
     * Global app timer.
     */
    protected timer: NodeJS.Timer;
    /**
     * List of installed services and add-ons.
     */
    protected services: Array<IServiceDefines>;
    /**
     * Application constructor.
     *
     * @param container Di container instant.
     */
    constructor(container?: Container);
    /**
     * Initialization app.
     */
    init(): Promise<any>;
    /**
     * Add a service object to the list of running.
     *
     * @param service Target service object.
     */
    addService(service: IServiceDefines): Application;
    /**
     * Add a service by name to the list of running.
     *
     * @param service Target service name.
     */
    addExternalService(service: string): Application;
}
