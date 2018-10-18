/**
 * Worker.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { Application } from '../Application';
import { Container } from '../Di';

/**
 * Class Worker
 * 
 * Cluster worker (unit).
 * 
 * @version 1.0.0
 */
export class Worker extends Application {
  
  /**
   * Worker constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);
  }

  /**
   * Initialization worker.
   */
  public async init () : Promise<any> {
    await super.init();
  }

}

/* End of file Worker.ts */