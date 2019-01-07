/**
 * Const.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import path from 'path';

/**
 * Full path to the file with the list of installed add-ons.
 */
export const BOOT_FILE = path.resolve(
  (process.env.APP_PATH) ? process.env.APP_PATH : 'App'
) + path.sep + 'boot.json';

/* End of file Const.ts */