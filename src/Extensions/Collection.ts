/**
 * Collection.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { Component } from "./../Component";
import { ExtensionDefines } from "./ExtensionDefines";
import { includes } from 'lodash';

/**
 * Class Collection
 * 
 * Collection of app extensions.
 * 
 * @version 1.0.0
 */
export class Collection extends Component {

  /**
   * Extensions list.
   */
  protected list: Array<string> = [];

  /**
   * Extensions instants.
   */
  protected instants: {[k: string]: ExtensionDefines} = {};

  /* ----------------------------------------------------------------------- */
  
  /**
   * Collection constructor.
   * 
   * @param items 
   */
  public constructor (items: Array<string> = []) {
    /* Call parent. */
    super();

    /* Set initial data. */
    this.list = items;
  }

  /* ----------------------------------------------------------------------- */
  
  /**
   * Add an extension to the boot list.
   * 
   * @param name The name of npm package or path to the local package.
   */
  public add (name: string) : Collection {
    if (!includes(this.list, name)) {
      this.list.push(name);
    }

    return this;
  }

}

/* End of file Collection.ts */