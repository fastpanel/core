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
const lodash_1 = require("lodash");
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
                logger.debug('setup');
                /*  */
                for (const name of this.extensions.list) {
                    /* Clear ext name. */
                    let clearName = lodash_1.trim(name, './\\@');
                    let commandName = `${clearName} setup`;
                    logger.debug(name);
                    logger.debug(clearName);
                    /* Find command by name. */
                    if (this.cli.getCommands().filter((c) => (c.name() === commandName || c.getAlias() === commandName))[0]) {
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
            .action((args, options, logger) => {
            return new Promise(async (resolve, reject) => {
                logger.debug('fastpanel/core setup');
                logger.debug(args);
                logger.debug(options);
                resolve();
            });
        });
    }
}
exports.Setup = Setup;
/* End of file Setup.js */ 
