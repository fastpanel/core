/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import Caporal from 'caporal';
import Winston from 'winston';
import inquirer from 'inquirer';
import WinstonDailyRotateFile from 'winston-daily-rotate-file';
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
    this.set('logger', (di: Container) => {
      let logger = Winston.createLogger({
        transports: [
          new Winston.transports.Console({
            handleExceptions: true,
            format: Winston.format.combine(
              Winston.format.colorize(),
              Winston.format.printf(info => `${info.message}`)
            )
          }),
          new WinstonDailyRotateFile({
            dirname: (process.env.LOGGER_PATH) ? process.env.LOGGER_PATH : 'App/Logs',
            filename: 'cli-%DATE%.log',
            datePattern: 'YYYY-MM-DD'
          })
        ],
        exitOnError: false
      });

      return logger;
    }, true);

    /* Registered cli interactive interface. */
    this.set('prompt', (di: Container) => {
      return inquirer.prompt;
    }, false);

    /* Registered cli handler component. */
    this.set('cli', (di: Container) => {
      let { version } = require('./package.json');

      Caporal
      .name(di.get('config').get('App.name', 'fastPanel'))
      .logger(di.get('logger'))
      .version(version);
      
      return Caporal;
    }, true);
  }

}

/* End of file FactoryDefault.ts */