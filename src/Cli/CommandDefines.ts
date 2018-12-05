/**
 * CommandDefines.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Injectable, Container } from "../Di";

/**
 * Class CommandDefines
 * 
 * Command abstract class.
 * 
 * @version 1.0.0
 */
export class CommandDefines extends Injectable {
  
  /**
   * CommandDefines constructor.
   * 
   * @param di Di container instant.
   */
  public constructor (di?: Container) {
    super(di);
  }

  /**
   * Initialize command.
   */
  public async initialize () : Promise<any> {}

}

/* End of file CommandDefines.ts */