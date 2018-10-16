/**
 * ServiceDefines.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

import { Container } from './Container';
import { Injectable } from './Injectable';

/**
 * Class ServiceDefines
 * 
 * Service abstract class.
 * 
 * @version 1.0.0
 */
export class ServiceDefines extends Injectable {

  /**
   * ServiceDefines constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container: Container = null) {
    super(container);
  }
  
  /**
   * ServiceDefines destructor.
   */
  public destructor () {}
  
  /**
   * Registers a service provider.
   */
  public async register () {}

}

/* End of file ServiceDefines.ts */