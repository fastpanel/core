/**
 * Collection.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
import { Container } from "./../Di/Container";
import { Injectable } from "./../Di/Injectable";
import { ExtensionDefines } from "./ExtensionDefines";
/**
 * Class Collection
 *
 * Collection of app extensions.
 *
 * @version 1.0.0
 */
export declare class Collection extends Injectable {
    /**
     * Extensions list.
     */
    protected list: Array<string>;
    /**
     * Extensions instants.
     */
    protected instants: {
        [k: string]: ExtensionDefines;
    };
    /**
     * Collection constructor.
     *
     * @param items
     */
    constructor(di?: Container, items?: Array<string>);
    /**
     * Add an extension to the boot list.
     *
     * @param name The name of npm package or path to the local package.
     */
    add(name: string): Collection;
    /**
     * Load and create instant of the extension.
     *
     * @param name The name of npm package or path to the local package.
     */
    load(name: string): Promise<any>;
    /**
     * Registration of extension components.
     *
     * @param name The name of npm package or path to the local package.
     */
    register(name: string): Promise<any>;
    /**
     * Running expansion.
     *
     * @param name The name of npm package or path to the local package.
     */
    startup(name: string): Promise<any>;
    /**
     * Load and initialize registered extensions.
     */
    boot(): Promise<any>;
}
