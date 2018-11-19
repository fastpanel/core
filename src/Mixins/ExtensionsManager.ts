/**
 * ExtensionsManager.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Container } from "../Di";
import { ExtensionDefines } from "../Extensions";

export const ExtensionsManager = (superClass: any) => class extends superClass {
  
  /**
   * List of installed extensions and add-ons.
   */
  public extensions: Array<ExtensionDefines> = [];

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
    await super.init();
  }
  
  /**
   * Registers a service providers.
   */
  public async register () : Promise<any> {
    /* Register all extensions. */
    for (const extension of this.extensions) {
      if (typeof extension.register === 'function') {
        try {
          await extension.register(this.di);
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
          await extension.startup(this.di);
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
  public addExtension (extension: typeof ExtensionDefines) : void {
    try {
      let instant: ExtensionDefines = new extension();
      this.extensions.push(instant);
    } catch (error) {
      console.error(error);
    }
  }
  
}

/* End of file ExtensionsManager.ts */