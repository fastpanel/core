/**
 * Const.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
/**
 * Full path to the file with the list of installed add-ons.
 */
export declare const BOOT_FILE: string;
/**
 * Default redis config.
 */
export declare const REDIS_CONFIG: {
    host: string;
    port: number;
    options: {
        family: number;
        password: string;
        db: number;
        keyPrefix: string;
    };
};
