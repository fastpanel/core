/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import path from 'path';
import Caporal from 'caporal';
import Winston from 'winston';
import prettyjson from 'prettyjson';
import inquirer from 'inquirer';
import WinstonDailyRotateFile from 'winston-daily-rotate-file';
import { EOL } from 'os';
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
              Winston.format.colorize({
                all: true
              }),
              Winston.format.printf((info) => {
                const { level, message, ...extra } = info;
                return `${message} ${
                  Object.keys(extra).length ? prettyjson.render(extra) + EOL : ''
                }`;
              })
            )
          }),
          new WinstonDailyRotateFile({
            handleExceptions: true,
            format: Winston.format.combine(
              Winston.format.timestamp(),
              Winston.format.json()
            ),
            dirname: ((process.env.LOGGER_PATH) ? process.env.LOGGER_PATH : 'App/Logs') + '/Cli',
            filename: '%DATE%.log',
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
      /* Get current app version. */
      let { version } = require(path.resolve(process.cwd(), 'package.json'));

      /* Init cli lib. */
      Caporal
      .bin('node cli.js')
      .name(di.get('config').get('App.name', 'fastPanel'))
      .logger(di.get('logger'))
      .version(version);
      
      return Caporal;
    }, true);
  }

}

/* End of file FactoryDefault.ts */