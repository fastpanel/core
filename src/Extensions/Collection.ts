/**
 * Collection.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { Container } from "./../Di/Container";
import { Injectable } from "./../Di/Injectable";
import { ExtensionDefines } from "./ExtensionDefines";
import { includes } from 'lodash';

/**
 * Class Collection
 * 
 * Collection of app extensions.
 * 
 * @version 1.0.0
 */
export class Collection extends Injectable {

  /**
   * Extensions list.
   */
  protected _list: Array<string> = [];

  /**
   * List getter.
   */
  get list () : Array<string> {
    return this._list;
  }

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
  public constructor (di?: Container, items: Array<string> = []) {
    /* Call parent. */
    super(di);

    /* Set initial data. */
    this._list = items;
  }

  /* ----------------------------------------------------------------------- */
  
  /**
   * Add an extension to the boot list.
   * 
   * @param name The name of npm package or path to the local package.
   */
  public add (name: string) : Collection {
    if (!includes(this._list, name)) {
      this._list.push(name);
    }

    return this;
  }

  /**
   * Load and create instant of the extension.
   * 
   * @param name The name of npm package or path to the local package.
   */
  public async load (name: string) : Promise<any> {
    /* Load extension. */
    let extension = await import(name);

    /* Check package format. */
    if (typeof extension.Extension !== 'undefined') {
      /* Create instant. */
      let instant: ExtensionDefines = new extension.Extension(this.di);

      /* Add instant to list. */
      this.instants[name] = instant;
    } else {
      throw new Error(`Incorrect package format for "${name}" extension.`);
    }
  }

  /**
   * Registration of extension components.
   * 
   * @param name The name of npm package or path to the local package.
   */
  public async register (name: string) : Promise<any> {
    if (!this.instants[name]) {
      throw new Error(`The extension "${name}" is not loaded.`);
    }

    await this.instants[name].register();
  }

  /**
   * Running expansion.
   * 
   * @param name The name of npm package or path to the local package.
   */
  public async startup (name: string) : Promise<any> {
    if (!this.instants[name]) {
      throw new Error(`The extension "${name}" is not loaded.`);
    }

    await this.instants[name].startup();
  }

  /**
   * Load and initialize registered extensions.
   */
  public async boot () : Promise<any> {
    /* Load extensions. */
    for (const name of this._list) {
      try {
        await this.load(name);
      } catch (error) {
        throw error;
      }
    }

    /* Register extensions. */
    for (const name of this._list) {
      try {
        await this.register(name);
      } catch (error) {
        throw error;
      }
    }

    /* Startup extensions. */
    for (const name of this._list) {
      try {
        await this.startup(name);
      } catch (error) {
        throw error;
      }
    }
  }

}

/* End of file Collection.ts */