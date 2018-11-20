/**
 * ExtensionDefines.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Container, Injectable } from "../Di";

/**
 * Class ExtensionDefines
 * 
 * Extension abstract class.
 * 
 * @version 1.0.0
 */
export class ExtensionDefines extends Injectable {
  
  /**
   * ExtensionDefines constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container? : Container) {
    super(container);
  }

  /**
   * Registers a service provider.
   */
  public async register () : Promise<any> {}

  /**
   * Startup a service provider.
   */
  public async startup () : Promise<any> {}

}

/* End of file ExtensionDefines.ts */