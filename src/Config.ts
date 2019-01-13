/**
 * Config.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import { Component } from "./Component";
import { 
  get,
  has,
  mergeWith,
  set,
  unset,
  trim,
  replace,
  isArray
} from 'lodash';

/**
 * Class Config
 * 
 * Config data and files manager.
 * 
 * @version 1.0.0
 */
export class Config extends Component {
  
  /**
   * Internal storage.
   */
  protected storage: any = {};

  /**
   * Path to the location of the config files.
   */
  private _path: string = '';
  
  /**
   * Path getter.
   */
  get path () : string {
    return this._path;
  }

  /**
   * Path setter.
   * 
   * @param value New path value.
   */
  set path (value: string) {
    /* Normalize delimiters. */
    value = trim(value, '\/');

    /* Resolve full path. */
    value = path.resolve(value) + path.sep;

    /* Check if the folder exists. */
    if (!fs.existsSync(value)) {
      /* Create a folder. */
      shell.mkdir('-p', value);
    }

    /* Set clear path. */
    this._path = value;
  }

  /* ----------------------------------------------------------------------- */
  
  /**
   * Config constructor.
   * 
   * @param path Path to the location of the config files.
   * @param data Initial config data.
   */
  public constructor (path: string = '', data: object = {}) {
    /* Call parent. */
    super();

    /* Set search path. */
    this.path = path;

    /* Set initial data. */
    this.storage = data;
  }

  /* ----------------------------------------------------------------------- */
  
  /**
   * Determine if the given config value exists using "dot" notation.
   *
   * @param key Dot notation index for search in config.
   */
  public has (key: string) : boolean {
    /* Format key. */
    key = this.formatKey(key);

    /* Find data. */
    return has(this.storage, key);
  }

  /**
   * Get an item from storage using "dot" notation.
   *
   * @param key Dot notation index for search in config.
   * @param preset Default data if key not represented.
   */
  public get (key: string, preset: any = null) : any {
    /* Format key. */
    key = this.formatKey(key);

    /* Get resource name. */
    let resource = key.split('.')[0];
    
    /* If not found, load the resource. */
    if (!this.has(resource)) {
      this.load(resource)
    }

    /* Find data. */
    return get(this.storage, key, preset);
  }

  /**
   * Set an item to storage using "dot" notation.
   *
   * @param key Dot notation index for search in config.
   * @param value New data.
   */
  public set (key: string, value: any) : Config {
    /* Format key. */
    key = this.formatKey(key);
    
    /* Set data. */
    set(this.storage, key, value);

    /*  */
    return this;
  }

  /**
   * Delete an item from storage using "dot" notation.
   *
   * @param key Dot notation index for search in config.
   */
  public unset (key: string) : Config {
    /* Format key. */
    key = this.formatKey(key);
    
    /* Delete data. */
    unset(this.storage, key);
    
    /*  */
    return this;
  }

  /* ----------------------------------------------------------------------- */

  /**
   * Loading config data from file.
   *
   * @param key Dot notation index for search in config.
   */
  public load (key: string) : Config {
    /* Format key. */
    key = this.formatKey(key);

    /* Get resource name. */
    let resource = key.split('.')[0];
    
    /* Comparison with runtime environment. */
    for (const value of ['', '.env']) {
      /* Formation of the file name. */
      let file = this.path + resource + value + '.json';

      /* Check if the file exists. */
      if (fs.existsSync(file)) {
        try {
          /* Get data. */
          let data = JSON.parse(
            fs.readFileSync(file, 'utf8')
          );

          if (isArray(data) && !this.storage[resource]) {
            this.storage[resource] = data;
          } else {
            /* Load file to storage. */
            this.storage[resource] = mergeWith(
              /* Original. */
              this.storage[resource],
              /* File data. */
              data,
              /* Customize value. */
              (objValue, srcValue) => {
                if (isArray(objValue)) {
                  return objValue.concat(srcValue);
                }
              }
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    
    /*  */
    return this;
  }

  /**
   * Write the config data in a file.
   *
   * @param key Dot notation index for search in config.
   * @param asDefault Save as the default.
   */
  public save (key: string, asDefault: boolean = false) : Config {
    /* Format key. */
    key = this.formatKey(key);

    /* Get resource name. */
    let resource = key.split('.')[0];
    
    /* Formation of the file name. */
    let file = this.path + resource + ((asDefault) ? '.json' : '.env.json');

    /* Check if the file exists. */
    if (!fs.existsSync(file)) {
      /* Get the folder name. */
      let dir = path.dirname(file);

      /* Check if the folder exists. */
      if (!fs.existsSync(dir)) {
        /* Create a folder. */
        shell.mkdir('-p', dir);
      }
    }
    
    /* Write the data to a file. */
    fs.writeFileSync(file, JSON.stringify(this.storage[resource], null, 2));

    /*  */
    return this;
  }

  /* ----------------------------------------------------------------------- */

  /**
   * Clear key from spaces and normalizes the delimiters.
   *
   * @param key Dot notation index for search in config.
   */
  public formatKey (key: string) : string {
    key = trim(key, '\/\\');
    key = replace(key, /[\/\\]/g, '/');
    return key;
  }

}

/* End of file Config.ts */