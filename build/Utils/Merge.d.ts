/**
 * Merge.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 *
 * This class is ported from the "https://github.com/yeikos/js.merge" repository.
 */
/**
 *
 */
export declare class Merge {
    /**
     * Merge two or more objects.
     *
     * @param {boolean} clone
     * @param {boolean} recursive
     * @param {Array<any>} argv
     *
     * @return any
     */
    static merge(clone: boolean, recursive: boolean, ...argv: any[]): any;
    /**
     * Merge two objects recursively.
     *
     * @param {any} base
     * @param {any} extend
     *
     * @return any
     */
    protected static recursive(base: any, extend: any): any;
    /**
     * Clone the input removing any reference.
     *
     * @param {any} input
     *
     * @return any
     */
    protected static clone(input: any): any;
    /**
     * Get type of variable.
     *
     * @param {any} input
     *
     * @return string
     */
    protected static typeOf(input: any): string;
}
