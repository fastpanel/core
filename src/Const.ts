/**
 * Const.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import path from 'path';

/**
 * Full path to the file with the list of installed add-ons.
 */
export const BOOT_FILE = path.resolve(
  (process.env.APP_PATH) ? process.env.APP_PATH : 'App'
) + path.sep + 'boot.json';

/**
 * Default redis config.
 */
export const REDIS_CONFIG = {
  host: '127.0.0.1',
  port: 6379,
  options: {
    family: 4,
    password: '',
    db: 0,
    keyPrefix: 'fastpanel:'
  }
};

/* End of file Const.ts */