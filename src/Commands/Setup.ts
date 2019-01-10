/**
 * Setup.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import Winston from 'winston';
import { CommandDefines, CommandSubscriptionDefines } from './../Cli';

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
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Winston.Logger) => {
      return new Promise(async (resolve, reject) => {
        logger.debug('app setup');
        logger.debug(args);
        logger.debug(options);
        resolve();
      });
    });

    this.cli
    .command('@fastpanel/core setup', 'Configure core components.')
    .option('-e, --env', 'Save as current environment settings.')
    .action((args: {[k: string]: any}, options: {[k: string]: any}, logger: Winston.Logger) => {
      return new Promise(async (resolve, reject) => {
        logger.debug('@fastpanel/core setup');
        logger.debug(args);
        logger.debug(options);
        resolve();
      });
    });
  }

}

/* End of file Setup.js */