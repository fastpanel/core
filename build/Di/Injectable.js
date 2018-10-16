"use strict";
/**
 * Injectable.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("./Container");
/**
 * Class Injectable
 *
 * This class allows to access services in the services container
 * by just only accessing a public property with the same name of
 * a registered service.
 *
 * @version 1.0.0
 */
class Injectable {
    /**
     * Injectable constructor.
     *
     * @param container Di container instant.
     */
    constructor(container = null) {
        /**
         * Di container.
         */
        this._di = null;
        /* Check di container. */
        this.di = (container) ? container : null;
        /* Set on add service event. */
        this.di.addListener('set', (name) => {
            /* Check object property. */
            if (!this.hasOwnProperty(name)) {
                /* Bind new property from service. */
                Object.defineProperty(this, name, {
                    enumerable: true,
                    configurable: true,
                    get: function () {
                        return this.di.get(name);
                    }
                });
            }
        });
        /* Add services to object. */
        for (const key in this.di.getAll()) {
            /* Check object property. */
            if (!this.hasOwnProperty(key)) {
                /* Bind new property from service. */
                Object.defineProperty(this, key, {
                    enumerable: true,
                    configurable: true,
                    get: function () {
                        return this.di.get(key);
                    }
                });
            }
        }
    }
    /**
     * Returns the internal dependency injector.
     */
    get di() {
        if (this._di) {
            return this._di;
        }
        else {
            return this._di = Container_1.Container.getDefault();
        }
    }
    /**
     * Sets the dependency injector.
     */
    set di(container) {
        this._di = container;
    }
}
exports.Injectable = Injectable;
/* End of file Injectable.ts */ 
