/**
 * Redis.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

import Redis from 'ioredis';
import { Application } from "../Application";
import { Container } from '../Di';

/**
 * 
 */
export default {
  async register (context: Application) : Promise<any> {
    context.di.set('redis', (container: Container, params: any) => {
      
    }, false);
  },
  async startup (context: Application) : Promise<any> {

  }
};

/* End of file Redis.ts */