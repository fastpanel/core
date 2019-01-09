"use strict";
/**
 * Setup.js
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Cli_1 = require("./../Cli");
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
    async initialize() {
        this.cli
            .command('app setup', 'Install and configure components.')
            .option('-f, --force', 'Forced reconfiguration of components.')
            .option('-e, --env', 'Save as current environment settings.')
            .option('-y, --yes', 'Assume yes if prompted.')
            .action((args) => {
            return new Promise(async (resolve, reject) => {
                /*  */
                if (args.options.force && !args.options.yes) {
                    let forcePrompt = await this.cli.activeCommand.prompt({
                        type: 'confirm',
                        name: 'continue',
                        default: false,
                        message: 'This action can break the application. Continue?',
                    });
                    if (!forcePrompt.continue) {
                        this.logger.info('Canceled by user.');
                        return resolve();
                    }
                }
                /*  */
                const profiler = this.logger.startTimer();
                /*  */
                let list = [];
                /*  */
                list.push(async (command, args) => {
                    /* Check and create boot config file. */
                    if (!fs_1.default.existsSync(Const_1.BOOT_FILE)) {
                        fs_1.default.writeFileSync(Const_1.BOOT_FILE, JSON.stringify({}));
                    }
                });
                /*  */
                this.events.emit('app:getSetupSubscriptions', list);
                /*  */
                for (const task of list) {
                    if (typeof task === 'function') {
                        try {
                            await task(this.cli.activeCommand, args);
                        }
                        catch (error) {
                            this.logger.error(error);
                        }
                    }
                }
                /*  */
                profiler.done({
                    message: 'Install and configure components completed.'
                });
                resolve();
            });
        });
    }
}
exports.Setup = Setup;
/* End of file Setup.js */ 
