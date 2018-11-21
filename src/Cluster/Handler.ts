/**
 * Handler.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Application } from './../Application';
import { Container } from './../Di';

/**
 * Class Handler
 * 
 * Cluster worker (unit) handler.
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
    
    /* Linked self. */
    this.di.set('context', () => {
      return this;
    }, true);
  }

  /**
   * Initialization worker handler.
   */
  public async init () : Promise<any> {
    /* Call parent. */
    await super.init();
    
    /* Set ready flag. */
    this.isStartup = true;
  }

}

/* End of file Handler.ts */