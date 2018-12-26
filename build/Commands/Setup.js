"use strict";
/**
 * Setup.js
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
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
            .action((args) => {
            return new Promise(async (resolve, reject) => {
                let list = [];
                list.push(async (command, args) => {
                    /* Check and create boot config file. */
                    if (!fs_1.default.existsSync(Const_1.BOOT_FILE)) {
                        fs_1.default.writeFileSync(Const_1.BOOT_FILE, JSON.stringify({}));
                    }
                    /* Check and create default config file. */
                    if (!this.config.get('Extensions/Redis', false)) {
                        this.config.set('Extensions/Redis', Const_1.REDIS_CONFIG);
                        this.config.save('Extensions/Redis', true);
                    }
                });
                this.events.emit('app:getSetupTasks', list);
                for (const task of list) {
                    if (typeof task === 'function') {
                        try {
                            await task(this.cli.activeCommand, args);
                        }
                        catch (error) {
                            this.cli.log(error);
                        }
                    }
                }
                resolve();
            });
        });
    }
}
exports.Setup = Setup;
/* End of file Setup.js */ 
