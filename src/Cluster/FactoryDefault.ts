/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import Winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { Container } from '../Di';
import * as Factory from './../Di/FactoryDefault';

/**
 * Class FactoryDefault
 * 
 * This is a variant of the standard Di for cluster mode. 
 * 
 * @version 1.0.0
 */
export class FactoryDefault extends Factory.FactoryDefault {

  /**
   * FactoryDefault constructor.
   */
  public constructor () {
    super();
    
    /* Registered logger component. */
    this.set('logger', (di: Container) => {
      let logger = Winston.createLogger({
        transports: [
          new Winston.transports.Console({
            handleExceptions: true,
            format: Winston.format.simple()
          }),
          new DailyRotateFile({
            dirname: (process.env.LOGGER_PATH) ? process.env.LOGGER_PATH : 'App/Logs',
            filename: 'cluster-%DATE%.log',
            datePattern: 'YYYY-MM-DD'
          })
        ],
        exitOnError: false
      });

      return logger;
    }, true);
  }

}

/* End of file FactoryDefault.ts */