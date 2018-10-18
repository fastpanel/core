/**
 * Application.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { Injectable, Container } from './Di';

/**
 * Class Application.
 * 
 * A wrapper to combine all components into a single events context.
 * 
 * @version 1.0.0
 */
export class Application extends Injectable {
  
  /**
   * Flag a app is ready.
   */
  public startup: boolean = false;

  /**
   * Application constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);

    /* Linked self. */
    this.di.set('context', () => {
      return this;
    });
  }

  /**
   * Initialization app.
   */
  public async init () : Promise<any> {}

}

/* End of file Application.ts */