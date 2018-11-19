/**
 * Injectable.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import { Container } from './Container';

/**
 * Class Injectable
 * 
 * This class allows to access services in the services container 
 * by just only accessing a public property with the same name of 
 * a registered service.
 * 
 * @version 1.0.0
 */
export class Injectable {
  
  /**
   * Dynamic property types.
   */
  [key: string]: any;

  /**
   * Di container.
   */
  protected _di: Container = null;

  /**
   * Injectable constructor.
   * 
   * @param container Di container instant.
   */
  public constructor (container: Container = null) {
    /* Check di container. */
    this.di = (container) ? container : null;

    /* Set on add service event. */
    this.di.addListener('set', (name) => {
      /* Check object property. */
      if (!this.hasOwnProperty(name)) {
        /* Bind new property from service. */
        Object.defineProperty(this, name, {
          enumerable: true,
          configurable: true,
          get: function () {
            return this.di.get(name);
          }
        });
      }
    });

    /* Add services to object. */
    for (const key in this.di.getAll()) {
      /* Check object property. */
      if (!this.hasOwnProperty(key)) {
        /* Bind new property from service. */
        Object.defineProperty(this, key, {
          enumerable: true,
          configurable: true,
          get: function () {
            return this.di.get(key);
          }
        });
      }
    }
  }
  
  /**
   * Returns the internal dependency injector.
   */
  get di () : Container {
    if (this._di) {
      return this._di;
    } else {
      return this._di = Container.getDefault();
    }
  }

  /**
   * Sets the dependency injector.
   */
  set di (container: Container) {
    this._di = container;
  }
  
}

/* End of file Injectable.ts */