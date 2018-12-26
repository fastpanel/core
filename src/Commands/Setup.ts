/**
 * Setup.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import fs from 'fs';
import { CommandInstance } from 'vorpal';
import { CommandDefines } from './../Cli';
import { BOOT_FILE, REDIS_CONFIG } from '../Const';

/**
 * Definition method a resolve setup task.
 */
export type SetupTaskDefinesMethod = (command: CommandInstance, args?: any) => Promise<any>;

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
        let list: Array<SetupTaskDefinesMethod> = [];

        list.push(async (command: CommandInstance, args?: any) => {
          /* Check and create boot config file. */
          if (!fs.existsSync(BOOT_FILE)) {
            fs.writeFileSync(BOOT_FILE, JSON.stringify({}));
          }
          
          /* Check and create default config file. */
          if (!this.config.get('Extensions/Redis', false)) {
            this.config.set('Extensions/Redis', REDIS_CONFIG);
            this.config.save('Extensions/Redis', true);
          }
        });

        this.events.emit('app:getSetupTasks', list);
        
        for (const task of list) {
          if (typeof task === 'function') {
            try {
              await task(this.cli.activeCommand, args);
            } catch (error) {
              this.cli.log(error);
            }
          }
        }

        resolve();
      });
    });
  }

}

/* End of file Setup.js */