/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
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
    addExtension(extension: typeof ExtensionDefines): void;
}
