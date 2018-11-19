/**
 * ExtensionsManager.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { Container } from "../Di";
import { ExtensionDefines } from "../Extensions";
export declare const ExtensionsManager: (superClass: any) => {
    new (container?: Container): {
        [x: string]: any;
        /**
         * List of installed extensions and add-ons.
         */
        extensions: ExtensionDefines[];
        /**
         * Initialization app.
         */
        init(): Promise<any>;
        /**
         * Registers a service providers.
         */
        register(): Promise<any>;
        /**
         * Startup a service providers.
         */
        startup(): Promise<any>;
        /**
         * Add a extension object to the list of running.
         *
         * @param extension Target extension class.
         */
        addExtension(extension: typeof ExtensionDefines): void;
    };
    [x: string]: any;
};
