/**
 * Handler.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import fs from 'fs';
import { Application } from './../Application';
import { Container } from './../Di';
import { REDIS_CONFIG, BOOT_FILE } from '../Const';

/**
 * Class Handler
 * 
 * Cli handler.
 * 
 * @version 1.0.0
 */
export class Handler extends Application {
  
  /**
   * Handler constructor.
   * 
   * @param di Di container instant.
   */
  public constructor (di?: Container) {
    super(di);
  }

  /**
   * Initialization cli handler.
   */
  public async init () : Promise<any> {
    /* Call parent. */
    await super.init();
    
    /* Register setup command. */
    this.cli
    .command('app setup', 'Install and configure the basic components of the system.')
    .action((args: any) => {
      return new Promise((resolve, reject) => {
        /* Check and create boot config file. */
        if (!fs.existsSync(BOOT_FILE)) {
          fs.writeFileSync(BOOT_FILE, JSON.stringify({}));
        }
        
        /* Check and create default config file. */
        if (!this.config.get('Extensions/Redis', false)) {
          this.config.set('Extensions/Redis', REDIS_CONFIG);
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

/* End of file Handler.ts */