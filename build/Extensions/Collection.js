"use strict";
/**
 * Collection.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./../Component");
const lodash_1 = require("lodash");
/**
 * Class Collection
 *
 * Collection of app extensions.
 *
 * @version 1.0.0
 */
class Collection extends Component_1.Component {
    /* ----------------------------------------------------------------------- */
    /**
     * Collection constructor.
     *
     * @param items
     */
    constructor(items = []) {
        /* Call parent. */
        super();
        /**
         * Extensions list.
         */
        this.list = [];
        /**
         * Extensions instants.
         */
        this.instants = {};
        /* Set initial data. */
        this.list = items;
    }
    /* ----------------------------------------------------------------------- */
    /**
     * Add an extension to the boot list.
     *
     * @param name The name of npm package or path to the local package.
     */
    add(name) {
        if (!lodash_1.includes(this.list, name)) {
            this.list.push(name);
        }
        return this;
    }
}
exports.Collection = Collection;
/* End of file Collection.ts */ 
