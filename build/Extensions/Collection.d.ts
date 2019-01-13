/**
 * Collection.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
import { Component } from "./../Component";
import { ExtensionDefines } from "./ExtensionDefines";
/**
 * Class Collection
 *
 * Collection of app extensions.
 *
 * @version 1.0.0
 */
export declare class Collection extends Component {
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
    constructor(items?: Array<string>);
    /**
     * Add an extension to the boot list.
     *
     * @param name The name of npm package or path to the local package.
     */
    add(name: string): Collection;
}
