"use strict";
/**
 * MixinBuilder.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class MixinBuilder
 *
 * Mixin assistant.
 *
 * @version 1.0.0
 */
class MixinBuilder {
    /**
     * MixinBuilder constructor.
     *
     * @param superClass Class to expand mixins.
     */
    constructor(superClass) {
        /**
         * Class to expand mixins.
         */
        this.superClass = null;
        this.superClass = superClass;
    }
    /**
     *
     * @param mixins
     */
    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superClass);
    }
}
exports.MixinBuilder = MixinBuilder;
/**
 * Helper method using a mixin assistant.
 *
 * @param superClass Class to expand mixins.
 */
exports.mixer = (superClass) => new MixinBuilder(superClass);
/* End of file MixinBuilder.ts */ 
