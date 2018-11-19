/**
 * ExtensionDefines.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Container } from "../Di";

/**
 * Class ExtensionDefines
 * 
 * Extension abstract class.
 * 
 * @version 1.0.0
 */
export class ExtensionDefines {
  
  /**
   * Registers a service provider.
   */
  public async register (di: Container) : Promise<any> {}

  /**
   * Startup a service provider.
   */
  public async startup (di: Container) : Promise<any> {}

}

/* End of file ExtensionDefines.ts */