/**
 * Setup.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { EOL } from 'os';
import path from 'path';
import Caporal from 'caporal';
import Winston from 'winston';
import { CommandDefines } from './../Cli';
import { concat, trim, toLower, merge } from 'lodash';
import { DEFAULT_CONFIG } from '../Const';

/**
 * Class Setup
 * 
 * @version 1.0.0
 */
export class Setup extends CommandDefines {

  /**
   * Initialize a commands provider.
   */
  public initialize () {
    this.cli
    .command('setup', 'Configure components.')
    .option('-e, --env', 'Save as current environment settings.')
    .option('-f, --force', 'Forced reconfiguration of components.')
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Winston.Logger) => {
      return new Promise(async (resolve, reject) => {
        /* Get ext list. */
        let list = concat(['@fastpanel/core'], this.extensions.list);

        /* Find and run commands. */
        for (const name of list) {
          /* Clear ext name. */
          let clearName = toLower(trim(name, './\\@'));
          let commandName = `${clearName} setup`;

          /* Find command by name. */
          if (
            this.cli.getCommands().filter(
              (c: any) => (c.name() === commandName || c.getAlias() === commandName)
            )[0]
          ) {
            try {
              /* Run command. */
              await this.cli.exec(
                [commandName],
                options
              );
            } catch (error) {
              /* Stop command by error. */
              reject(error);
            }
          }
        }
        
        /* Command complete. */
        resolve();
      });
    });

    this.cli
    .command('fastpanel/core setup', 'Configure core components.')
    .option('-e, --env', 'Save as current environment settings.')
    .option('-f, --force', 'Forced reconfiguration of components.')
    .visible(false)
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Winston.Logger) => {
      return new Promise(async (resolve, reject) => {
        /* Info message. */
        logger.info(`${EOL}Configure core components.`);

        if (!this.config.get('App', false) || options.force) {
          /* Get current app package. */
          let { name } = require(path.resolve(process.cwd(), 'package.json'));

          /* Prompts list. */
          let questions = [
            /* App display name. */
            {
              type: 'input',
              name: 'name',
              message: 'Enter application display name',
              default: this.config.get('App.name', (name ? name : DEFAULT_CONFIG.name))
            },
            /* Cli app exec bin name. */
            {
              type: 'input',
              name: 'cliBin',
              message: 'Enter cli application exec bin name',
              default: this.config.get('App.cliBin', DEFAULT_CONFIG.cliBin)
            }
          ];

          /* Show prompts to user. */
          let answers = await this.prompt(questions);
          let config = merge(DEFAULT_CONFIG, answers);

          /* Save data. */
          this.config.set('App', config);
          this.config.save('App', !(options.env));

          /* Info message. */
          logger.info(`${EOL}Applied:`);
          logger.info('', this.config.get('App'));
        } else {
          /* Info message. */
          logger.info(` Everything is already configured. ${EOL}`);
        }

        /* Command complete. */
        resolve();
      });
    });
  }

}

/* End of file Setup.ts */