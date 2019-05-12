/**
 * FactoryDefault.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import { EOL } from 'os';
import Caporal from 'caporal';
import inquirer from 'inquirer';
import prettyjson from 'prettyjson';
import Winston from 'winston';
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
      /* Get config instant. */
      const config = di.get('config');

      /* Init logger lib. */
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
                  Object.keys(extra).length ? EOL + prettyjson.render(extra) + EOL : ''
                }`;
              })
            )
          }),
          new WinstonDailyRotateFile({
            level: (process.env.NODE_ENV !== 'production' ? 'silly' : 'warn'),
            handleExceptions: true,
            format: Winston.format.combine(
              Winston.format.timestamp(),
              Winston.format.json()
            ),
            dirname: config.get('Env.LOGGER_PATH', 'App/Logs') + '/Cli',
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
      /* Get config instant. */
      const config = di.get('config');

      /* Init cli lib. */
      Caporal
      .bin(config.get('Env.APP_CLI_BIN', config.get('App.cliBin', 'node build/cli.js')))
      .name(config.get('Env.APP_NAME', config.get('App.name', 'fastPanel')))
      .version(config.get('Env.APP_VERSION', '1.0.0'))
      .logger(di.get('logger'));
      
      return Caporal;
    }, true);
  }

}

/* End of file FactoryDefault.ts */