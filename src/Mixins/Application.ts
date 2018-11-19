/**
 * Application.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Container } from "../Di";

/**
 * Class Application.
 * 
 * A app mixin.
 * 
 * @version 1.0.0
 */
export const Application = (superClass: any) => class extends superClass {
  
  /**
   * Flag a app is ready.
   */
  public isStartup: boolean = false;
  
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
  public async init () : Promise<any> {}
  
}

/* End of file Application.ts */