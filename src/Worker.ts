/**
 * Worker.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { Injectable, Container } from './Di';

/**
 * Class Worker
 * 
 * Worker to combine all components into a single events context.
 * 
 * @version 1.0.0
 */
export class Worker extends Injectable {
  
  /**
   * Flag a worker is ready.
   */
  public startup: boolean = false;

  /**
   * Worker constructor.
   */
  public constructor (container? : Container) {
    super(container);

    /* Linked self. */
    this.di.set('context', () => {
      return this;
    });
  }

  /**
   * Initialization worker.
   */
  public async init () {}

}

/* End of file Worker.ts */