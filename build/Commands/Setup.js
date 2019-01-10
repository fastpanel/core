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
    async initialize() {
        this.cli
            .command('@fastpanel/core setup', 'Install core components.')
            .option('-f, --force', 'Forced reconfiguration of components.')
            .option('-e, --env', 'Save as current environment settings.')
            .option('-y, --yes', 'Assume yes if prompted.')
            .action((args, options, logger) => {
            return new Promise(async (resolve, reject) => {
                logger.debug('@fastpanel/core setup');
                logger.debug(args);
                logger.debug(options);
                resolve();
            });
        });
        this.cli
            .command('app setup', 'Install and configure components.')
            .option('-f, --force', 'Forced reconfiguration of components.')
            .option('-e, --env', 'Save as current environment settings.')
            .option('-y, --yes', 'Assume yes if prompted.')
            .action((args, options, logger) => {
            return new Promise(async (resolve, reject) => {
                logger.debug('app setup');
                logger.debug(args);
                logger.debug(options);
                resolve();
            });
        });
    }
}
exports.Setup = Setup;
/* End of file Setup.js */ 
