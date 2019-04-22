/**
 * HandlerGlobal.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { Container } from './../Di';
import { Application } from './../Application';

/**
 * Class HandlerGlobal
 * 
 * Cli global handler.
 * 
 * @version 1.0.0
 */
export class HandlerGlobal extends Application {
  
  /**
   * HandlerGlobal constructor.
   * 
   * @param di Di container instant.
   */
  public constructor (di?: Container) {
    super(di);
  }

  /**
   * Initialization cli global handler.
   */
  public async init () : Promise<any> {
    /* Call parent. */
    await super.init();
    
    /* Fire event. */
    this.events.emit('cli:getCommands', this.cli);

    /* Set ready flag. */
    this.isStartup = true;

    /* Startup cli handler. */
    await this.cli.parse(process.argv);

    /* Close all connections. */
    process.exit(0);
  }

}

/* End of file HandlerGlobal.ts */