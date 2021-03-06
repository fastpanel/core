/**
 * Handler.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { Container } from './../../Di';
import { Application } from './../../Application';

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
    
    /* Fire event. */
    this.events.emit('cli:getCommands', this.cli);

    /* Set ready flag. */
    this.isStartup = true;
  }

}

/* End of file Handler.ts */