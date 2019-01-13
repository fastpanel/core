/**
 * Application.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { Container, Injectable } from "./Di";

/**
 * Class Application
 * 
 * Wrap for apps.
 * 
 * @version 1.0.0
 */
export class Application extends Injectable {
  
  /**
   * Flag a app is ready.
   */
  public isStartup: boolean = false;
  
  /**
   * 
   */
  protected watchdogTimer: NodeJS.Timer;

  /* ----------------------------------------------------------------------- */
  
  /**
   * Application constructor.
   * 
   * @param di Di container instant.
   */
  public constructor (di?: Container) {
    super(di);
    
    /* Linked self. */
    this.di.set('context', () => {
      return this;
    }, true);
  }
  
  /**
   * Initialization app.
   */
  public async init () : Promise<any> {
    /* Load and initialize registered extensions. */
    await this.extensions.boot();

    /* Initial watchdog timer. */
    this.watchdogTimer = setInterval(() => {
      this.events.emit('app:watchdog', this);
    }, 1000);
  }
  
}

/* End of file Application.ts */