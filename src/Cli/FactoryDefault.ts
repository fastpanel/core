/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import Vorpal from 'vorpal';
import Winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { Container } from '../Di';
import * as Factory from './../Di/FactoryDefault';

/**
 * Class FactoryDefault
 * 
 * This is a variant of the standard Di for cli mode. 
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
    this.set('logger', (container: Container) => {
      let logger = Winston.createLogger({
        transports: [
          new Winston.transports.Console({
            handleExceptions: true
          }),
          new DailyRotateFile({
            dirname: (process.env.LOGGER_PATH) ? process.env.LOGGER_PATH : 'App/Logs',
            filename: 'cli-%DATE%.log',
            datePattern: 'YYYY-MM-DD'
          })
        ],
        exitOnError: false
      });

      return logger;
    }, true);

    /* Registered cli handler component. */
    this.set('cli', (container: Container) => {
      let vorpal = new Vorpal();
      return vorpal;
    }, true);
  }

}

/* End of file FactoryDefault.ts */