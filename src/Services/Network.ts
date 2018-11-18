/**
 * Network.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import * as Cluster from '../Cluster';
import * as Cli from '../Cli';

export default {
  async register (context: Cli.Handler | Cluster.Handler) : Promise<any> {
    console.log(Cli.Handler);
    console.log(Cluster.Handler);
    /* Check current app type. */
    if (context instanceof Cli.Handler) {
      console.log('Worker');
    } else {
      console.log('Not Worker');
    }
  },
  async startup (context: Cli.Handler | Cluster.Handler) : Promise<any> {
    /* Check current app type. */
    /* if (context instanceof Worker) {
      console.log('Worker');
    } else {
      console.log('Not Worker');
    } */
  }
}

/* End of file Network.ts */