/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
/// <reference types="node" />
import { Container, Injectable } from "./Di";
import { ExtensionDefines } from "./Extensions";
/**
 * Class Application
 *
 * Wrap for apps.
 *
 * @version 1.0.0
 */
export declare class Application extends Injectable {
    /**
     * Flag a app is ready.
     */
    isStartup: boolean;
    /**
     * List of installed extensions and add-ons.
     */
    protected extensions: Array<ExtensionDefines>;
    /**
     *
     */
    protected watchdogTimer: NodeJS.Timer;
    /**
     * Application constructor.
     *
     * @param di Di container instant.
     */
    constructor(di?: Container);
    /**
     * Initialization app.
     */
    init(): Promise<any>;
    /**
     * Registers a service providers.
     */
    register(): Promise<any>;
    /**
     * Startup a service providers.
     */
    startup(): Promise<any>;
    /**
     * Add a extension object to the list of running.
     *
     * @param extension Target extension class.
     */
    addExtension(extension: any): Application;
}
