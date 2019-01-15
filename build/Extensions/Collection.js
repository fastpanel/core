"use strict";
/**
 * Collection.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Injectable_1 = require("./../Di/Injectable");
const lodash_1 = require("lodash");
/**
 * Class Collection
 *
 * Collection of app extensions.
 *
 * @version 1.0.0
 */
class Collection extends Injectable_1.Injectable {
    /* ----------------------------------------------------------------------- */
    /**
     * Collection constructor.
     *
     * @param items
     */
    constructor(di, items = []) {
        /* Call parent. */
        super(di);
        /**
         * Extensions list.
         */
        this._list = [];
        /**
         * Extensions instants.
         */
        this.instants = {};
        /* Set initial data. */
        this._list = items;
    }
    /**
     * List getter.
     */
    get list() {
        return this._list;
    }
    /* ----------------------------------------------------------------------- */
    /**
     * Add an extension to the boot list.
     *
     * @param name The name of npm package or path to the local package.
     */
    add(name) {
        if (!lodash_1.includes(this._list, name)) {
            this._list.push(name);
        }
        return this;
    }
    /**
     * Load and create instant of the extension.
     *
     * @param name The name of npm package or path to the local package.
     */
    async load(name) {
        /* Load extension. */
        let extension = await Promise.resolve().then(() => __importStar(require(name)));
        /* Check package format. */
        if (typeof extension.Extension !== 'undefined') {
            /* Create instant. */
            let instant = new extension.Extension(this.di);
            /* Add instant to list. */
            this.instants[name] = instant;
        }
        else {
            throw new Error(`Incorrect package format for "${name}" extension.`);
        }
    }
    /**
     * Registration of extension components.
     *
     * @param name The name of npm package or path to the local package.
     */
    async register(name) {
        if (!this.instants[name]) {
            throw new Error(`The extension "${name}" is not loaded.`);
        }
        await this.instants[name].register();
    }
    /**
     * Running expansion.
     *
     * @param name The name of npm package or path to the local package.
     */
    async startup(name) {
        if (!this.instants[name]) {
            throw new Error(`The extension "${name}" is not loaded.`);
        }
        await this.instants[name].startup();
    }
    /**
     * Load and initialize registered extensions.
     */
    async boot() {
        /* Load extensions. */
        for (const name of this._list) {
            try {
                await this.load(name);
            }
            catch (error) {
                throw error;
            }
        }
        /* Register extensions. */
        for (const name of this._list) {
            try {
                await this.register(name);
            }
            catch (error) {
                throw error;
            }
        }
        /* Startup extensions. */
        for (const name of this._list) {
            try {
                await this.startup(name);
            }
            catch (error) {
                throw error;
            }
        }
    }
}
exports.Collection = Collection;
/* End of file Collection.ts */ 
