"use strict";
/**
 * Setup.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const path_1 = __importDefault(require("path"));
const Cli_1 = require("./../Cli");
const lodash_1 = require("lodash");
const Const_1 = require("../Const");
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
            .option('-f, --force', 'Forced reconfiguration of components.')
            .action((args, options, logger) => {
            return new Promise(async (resolve, reject) => {
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
                /* Command complete. */
                resolve();
            });
        });
        this.cli
            .command('fastpanel/core setup', 'Configure core components.')
            .option('-e, --env', 'Save as current environment settings.')
            .option('-f, --force', 'Forced reconfiguration of components.')
            .visible(false)
            .action((args, options, logger) => {
            return new Promise(async (resolve, reject) => {
                /* Info message. */
                logger.info(`${os_1.EOL}Configure core components.`);
                if (!this.config.get('App', false) || options.force) {
                    /* Get current app package. */
                    let { name } = require(path_1.default.resolve(process.cwd(), 'package.json'));
                    /* Prompts list. */
                    let questions = [
                        /* App display name. */
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Enter application display name',
                            default: this.config.get('App.name', (name ? name : Const_1.DEFAULT_CONFIG.name))
                        },
                        /* Cli app exec bin name. */
                        {
                            type: 'input',
                            name: 'cliBin',
                            message: 'Enter cli application exec bin name',
                            default: this.config.get('App.cliBin', Const_1.DEFAULT_CONFIG.cliBin)
                        }
                    ];
                    /* Show prompts to user. */
                    let answers = await this.prompt(questions);
                    let config = lodash_1.merge(Const_1.DEFAULT_CONFIG, answers);
                    /* Save data. */
                    this.config.set('App', config);
                    this.config.save('App', !(options.env));
                    /* Info message. */
                    logger.info(`${os_1.EOL}Applied:`);
                    logger.info('', this.config.get('App'));
                }
                else {
                    /* Info message. */
                    logger.info(` Everything is already configured. ${os_1.EOL}`);
                }
                /* Command complete. */
                resolve();
            });
        });
    }
}
exports.Setup = Setup;
/* End of file Setup.ts */ 
