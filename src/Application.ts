/**
 * Application.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Container, Injectable } from "./Di";
import { ExtensionDefines } from "./Extensions";

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
   * List of installed extensions and add-ons.
   */
  protected extensions: Array<ExtensionDefines> = [];

  /**
   * Application constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);
  }
  
  /**
   * Initialization app.
   */
  public async init () : Promise<any> {
    /* Registers a service providers. */
    await this.register();

    /* Startup a service providers. */
    await this.startup();
  }
  
  /**
   * Registers a service providers.
   */
  public async register () : Promise<any> {
    /* Register all extensions. */
    for (const extension of this.extensions) {
      if (typeof extension.register === 'function') {
        try {
          await extension.register();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  /**
   * Startup a service providers.
   */
  public async startup () : Promise<any> {
    /* Startup all extensions. */
    for (const extension of this.extensions) {
      if (typeof extension.startup === 'function') {
        try {
          await extension.startup();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  /**
   * Add a extension object to the list of running.
   * 
   * @param extension Target extension class.
   */
  public addExtension (extension: any) : Application {
    try {
      if (typeof extension.Extension !== 'undefined') {
        let ExtObject = extension.Extension;
        let instant: ExtensionDefines = new ExtObject(this.di);
        
        this.extensions.push(instant);
      }
    } catch (error) {
      console.error(error);
    }

    return this;
  }
  
}

/* End of file Application.ts */