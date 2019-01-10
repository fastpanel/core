/**
 * Setup.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import fs from 'fs';
import { CommandDefines, CommandSubscriptionDefines } from './../Cli';
import { BOOT_FILE } from '../Const';

/**
 * Class Setup
 * 
 * @version 1.0.0
 */
export class Setup extends CommandDefines {

  /**
   * Initialize a commands provider.
   */
  public async initialize () : Promise<any> {
    this.cli
    .command('@fastpanel/core setup', 'Install core components.')
    .option('-f, --force', 'Forced reconfiguration of components.')
    .option('-e, --env', 'Save as current environment settings.')
    .option('-y, --yes', 'Assume yes if prompted.')
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Logger) => {
      return new Promise(async (resolve, reject) => {
        resolve();
      });
    });

    this.cli
    .command('app setup', 'Install and configure components.')
    .option('-f, --force', 'Forced reconfiguration of components.')
    .option('-e, --env', 'Save as current environment settings.')
    .option('-y, --yes', 'Assume yes if prompted.')
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Logger) => {
      return new Promise(async (resolve, reject) => {
        resolve();
      });
    });
  }

}

/* End of file Setup.js */