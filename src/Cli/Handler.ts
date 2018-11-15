/**
 * Handler.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { Application } from '../Application';
import { Container } from '../Di';

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
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);
  }

  /**
   * Initialization cli handler.
   */
  public async init () : Promise<any> {
    await super.init();
    
    /* Set ready flag. */
    this.startup = true;
    
    /* Startup cli handler. */
    this.cli
    .delimiter('=>')
    .show();
  }

}

/* End of file Handler.ts */