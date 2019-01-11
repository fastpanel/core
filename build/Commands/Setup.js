"use strict";
/**
 * Setup.js
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Cli_1 = require("./../Cli");
/**
 * Class Setup
 *
 * @version 1.0.0
 */
class Setup extends Cli_1.CommandDefines {
    /**
     * Initialize a commands provider.
     */
    initialize() {
        this.cli
            .command('setup', 'Configure components.')
            .option('-e, --env', 'Save as current environment settings.')
            .option('-f, --force', 'Forced command running.')
            .option('-y, --yes', 'Assume yes if prompted.')
            .action((args, options, logger) => {
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
            .option('-f, --force', 'Forced command running.')
            .option('-y, --yes', 'Assume yes if prompted.')
            .action((args, options, logger) => {
            return new Promise(async (resolve, reject) => {
                logger.debug('@fastpanel/core setup');
                logger.debug(args);
                logger.debug(options);
                resolve();
            });
        });
    }
}
exports.Setup = Setup;
/* End of file Setup.js */ 
