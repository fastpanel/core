"use strict";
/**
 * Handler.ts
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
const Application_1 = require("./../Application");
const Const_1 = require("../Const");
/**
 * Class Handler
 *
 * Cli handler.
 *
 * @version 1.0.0
 */
class Handler extends Application_1.Application {
    /**
     * Handler constructor.
     *
     * @param di Di container instant.
     */
    constructor(di) {
        super(di);
    }
    /**
     * Initialization cli handler.
     */
    async init() {
        /* Call parent. */
        await super.init();
        /* Register setup command. */
        this.cli
            .command('app setup', 'Install and configure the basic components of the system.')
            .action((args) => {
            return new Promise((resolve, reject) => {
                /* Check and create boot config file. */
                if (!fs_1.default.existsSync(Const_1.BOOT_FILE)) {
                    fs_1.default.writeFileSync(Const_1.BOOT_FILE, JSON.stringify({}));
                }
                /* Check and create default config file. */
                if (!this.config.get('Extensions/Redis', false)) {
                    this.config.set('Extensions/Redis', Const_1.REDIS_CONFIG);
                    this.config.save('Extensions/Redis', true);
                }
                /* Fire event. */
                this.events.emit('app:setup', this);
                resolve();
            });
        });
        /* Fire event. */
        this.events.emit('cli:getCommands', this.cli);
        /* Set ready flag. */
        this.isStartup = true;
        /* Startup cli handler. */
        this.cli
            .delimiter('>')
            .show()
            .parse(process.argv);
    }
}
exports.Handler = Handler;
/* End of file Handler.ts */ 
