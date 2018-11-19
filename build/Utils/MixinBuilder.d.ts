/**
 * MixinBuilder.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
/**
 * Class MixinBuilder
 *
 * Mixin assistant.
 *
 * @version 1.0.0
 */
export declare class MixinBuilder {
    /**
     * Class to expand mixins.
     */
    superClass: any;
    /**
     * MixinBuilder constructor.
     *
     * @param superClass Class to expand mixins.
     */
    constructor(superClass: any);
    /**
     *
     * @param mixins
     */
    with(...mixins: any): any;
}
/**
 * Helper method using a mixin assistant.
 *
 * @param superClass Class to expand mixins.
 */
export declare const Mixer: (superClass: any) => MixinBuilder;
