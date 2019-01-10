/**
 * Setup.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import fs from 'fs';
import { CommandInstance } from 'vorpal';
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
    .action((args: any) => {
      return new Promise(async (resolve, reject) => {
        /* Check and create boot config file. */
        if (!fs.existsSync(BOOT_FILE)) {
          fs.writeFileSync(BOOT_FILE, JSON.stringify({}));
        }

        resolve();
      });
    });

    this.cli
    .command('app setup', 'Install and configure components.')
    .option('-f, --force', 'Forced reconfiguration of components.')
    .option('-e, --env', 'Save as current environment settings.')
    .option('-y, --yes', 'Assume yes if prompted.')
    .action((args: any) => {
      return new Promise(async (resolve, reject) => {
        /*  */
        if (args.options.force && !args.options.yes) {
          let forcePrompt = await this.cli.activeCommand.prompt({
            type: 'confirm',
            name: 'continue',
            default: false,
            message: 'This action can break the application. Continue?',
          });

          if (!forcePrompt.continue) {
            this.logger.info('Canceled by user.');
            return resolve();
          }
        }

        /*  */
        const profiler = this.logger.startTimer();

        /*  */
        let list: Array<CommandSubscriptionDefines> = [];

        /*  */
        list.push(async (command: CommandInstance, args?: any) => {
          return this.cli.exec('@fastpanel/core setup');
        });

        /*  */
        this.events.emit('app:getSetupSubscriptions', list);
        
        /*  */
        for (const task of list) {
          if (typeof task === 'function') {
            try {
              await task(this.cli.activeCommand, args);
            } catch (error) {
              this.logger.error(error);
            }
          }
        }
        
        /*  */
        profiler.done({
          message: 'Install and configure components completed.'
        });

        resolve();
      });
    });
  }

}

/* End of file Setup.js */