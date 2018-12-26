/**
 * Setup.js
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import { CommandInstance } from 'vorpal';
import { CommandDefines } from './../Cli';
/**
 * Definition method a resolve setup task.
 */
export declare type SetupTaskDefinesMethod = (command: CommandInstance, args?: any) => Promise<any>;
/**
 * Class Setup
 *
 * @version 1.0.0
 */
export declare class Setup extends CommandDefines {
    /**
     * Initialize a commands provider.
     */
    initialize(): Promise<any>;
}
