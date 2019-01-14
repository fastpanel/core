/**
 * Setup.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import Caporal from 'caporal';
import Winston from 'winston';
import { CommandDefines } from './../Cli';
import { trim } from 'lodash';

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
    .option('-f, --force', 'Forced command running.')
    .option('-y, --yes', 'Assume yes if prompted.')
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Winston.Logger) => {
      return new Promise(async (resolve, reject) => {
        logger.debug('setup');

        /*  */
        for (const name of this.extensions.list) {
          /* Clear ext name. */
          let clearName = trim(name, './\\@');
          let commandName = `${clearName} setup`;

          logger.debug(name);
          logger.debug(clearName);

          /* Find command by name. */
          if (
            this.cli.getCommands().filter(
              (c: any) => (c.name() === commandName || c.getAlias() === commandName)
            )[0]
          ) {
            logger.debug('Command exist: ' + commandName);
          }
        }
        
        /* Command complete. */
        resolve();
      });
    });

    this.cli
    .command('fastpanel/core setup', 'Configure core components.')
    .option('-e, --env', 'Save as current environment settings.')
    .option('-f, --force', 'Forced command running.')
    .option('-y, --yes', 'Assume yes if prompted.')
    .visible(false)
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Winston.Logger) => {
      return new Promise(async (resolve, reject) => {
        logger.debug('fastpanel/core setup');
        logger.debug(args);
        logger.debug(options);
        resolve();
      });
    });
  }

}

/* End of file Setup.js */