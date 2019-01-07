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
    .command('app setup', 'Install and configure components.')
    .action((args: any) => {
      return new Promise(async (resolve, reject) => {
        let list: Array<CommandSubscriptionDefines> = [];

        list.push(async (command: CommandInstance, args?: any) => {
          /* Check and create boot config file. */
          if (!fs.existsSync(BOOT_FILE)) {
            fs.writeFileSync(BOOT_FILE, JSON.stringify({}));
          }
        });

        this.events.emit('app:getSetupSubscriptions', list);
        
        for (const task of list) {
          if (typeof task === 'function') {
            try {
              await task(this.cli.activeCommand, args);
            } catch (error) {
              this.logger.error(error);
            }
          }
        }

        resolve();
      });
    });
  }

}

/* End of file Setup.js */