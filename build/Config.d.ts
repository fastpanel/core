/**
 * Config.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
import { Component } from "./Component";
/**
 * Class Config
 *
 * Config data and files manager.
 *
 * @version 1.0.0
 */
export declare class Config extends Component {
    /**
     * Internal storage.
     */
    protected storage: any;
    /**
     * Path to the location of the config files.
     */
    private _path;
    /**
     * Path getter.
     */
    /**
    * Path setter.
    *
    * @param value New path value.
    */
    path: string;
    /**
     * Config constructor.
     *
     * @param path Path to the location of the config files.
     * @param data Initial config data.
     */
    constructor(path?: string, data?: object);
    /**
     * Determine if the given config value exists using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     */
    has(key: string): boolean;
    /**
     * Get an item from storage using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     * @param preset Default data if key not represented.
     */
    get(key: string, preset?: any): any;
    /**
     * Set an item to storage using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     * @param value New data.
     */
    set(key: string, value: any): Config;
    /**
     * Delete an item from storage using "dot" notation.
     *
     * @param key Dot notation index for search in config.
     */
    unset(key: string): Config;
    /**
     * Loading config data from file.
     *
     * @param key Dot notation index for search in config.
     */
    load(key: string): Config;
    /**
     * Write the config data in a file.
     *
     * @param key Dot notation index for search in config.
     * @param asDefault Save as the default.
     */
    save(key: string, asDefault?: boolean): Config;
    /**
     * Clear key from spaces and normalizes the delimiters.
     *
     * @param key Dot notation index for search in config.
     */
    formatKey(key: string): string;
}
