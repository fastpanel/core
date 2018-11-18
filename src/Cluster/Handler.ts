/**
 * Handler.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { Container } from './../Di';
import Application from './../Application';

/**
 * Class Handler
 * 
 * Cluster worker (unit) handler.
 * 
 * @version 1.0.0
 */
class Handler extends Application {
  
  /**
   * Handler constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);
  }

  /**
   * Initialization worker handler.
   */
  public async init () : Promise<any> {
    await super.init();
    
    /* Set ready flag. */
    this.startup = true;
  }

}

module.exports = Handler;

/* End of file Handler.ts */