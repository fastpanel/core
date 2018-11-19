/**
 * Handler.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Injectable, Container } from './../Di';
import { Application, ExtensionsManager } from './../Mixins';
import { Mixer } from './../Utils';

/**
 * Class Handler
 * 
 * Cli handler.
 * 
 * @version 1.0.0
 */
export class Handler extends Mixer(Injectable).with(
  Application, ExtensionsManager) {
  
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
    /* Call parent. */
    await super.init();
    
    /* Registers a service providers. */
    await this.register();

    /* Startup a service providers. */
    await this.startup();

    /* Set ready flag. */
    this.isStartup = true;
    
    /* Startup cli handler. */
    this.cli
    .delimiter('=>')
    .show();
  }

}

/* End of file Handler.ts */