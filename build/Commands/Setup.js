"use strict";
/**
 * Setup.ts
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
                /* Start profiling. */
                logger.profile('setup');
                /* Get ext list. */
                let list = lodash_1.concat(['@fastpanel/core'], this.extensions.list);
                /* Find and run commands. */
                for (const name of list) {
                    /* Clear ext name. */
                    let clearName = lodash_1.toLower(lodash_1.trim(name, './\\@'));
                    let commandName = `${clearName} setup`;
                    /* Find command by name. */
                    if (this.cli.getCommands().filter((c) => (c.name() === commandName || c.getAlias() === commandName))[0]) {
                        try {
                            /* Run command. */
                            await this.cli.exec([commandName], options);
                        }
                        catch (error) {
                            /* Stop command by error. */
                            reject(error);
                        }
                    }
                }
                /* End profiling. */
                logger.profile('setup');
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
/* End of file Setup.ts */ 
