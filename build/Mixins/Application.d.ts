/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Container } from "../Di";
/**
 * Class Application.
 *
 * A app mixin.
 *
 * @version 1.0.0
 */
export declare const Application: (superClass: any) => {
    new (container?: Container): {
        [x: string]: any;
        /**
         * Flag a app is ready.
         */
        isStartup: boolean;
        /**
         * Initialization app.
         */
        init(): Promise<any>;
    };
    [x: string]: any;
};
