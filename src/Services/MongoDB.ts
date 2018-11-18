/**
 * MongoDB.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import MongoSE from 'mongoose';
import * as Cli from '../Cli';
import * as Cluster from '../Cluster';
import { Container } from '../Di';

/* Set mongoose options. */
MongoSE.Promise = global.Promise;

export default {
  async register (context: Cli.Handler | Cluster.Handler) : Promise<any> {
    /* Forming the connection address. */
    let url = "mongodb://"
    + context.config.get('Services/Database.host', '127.0.0.1')
    + ":" + context.config.get('Services/Database.port', 27017);

    /* Connect to database. */
    await MongoSE.connect(url, {
      /*  */
      user              : context.config.get('Services/Database.user', null),
      pass              : context.config.get('Services/Database.pass', null),
      dbName            : context.config.get('Services/Database.dbName', 'fastPanel'),
      /*  */
      autoReconnect     : context.config.get('Services/Database.autoReconnect', true),
      reconnectTries    : context.config.get('Services/Database.reconnectTries', Number.MAX_VALUE),
      reconnectInterval : context.config.get('Services/Database.reconnectInterval', 500),
      poolSize          : context.config.get('Services/Database.poolSize', 10),
      /*  */
      promiseLibrary    : global.Promise,
      useNewUrlParser   : true
    });

    /* Register connection object. */
    context.di.set('db', (container: Container) => {
      return MongoSE.connection;
    }, false);
  },
  async startup (context: Cli.Handler | Cluster.Handler) : Promise<any> {
    /* Fire db startup event. */
    context.events.emit('db:startup');
  }
};

/* End of file MongoDB.ts */