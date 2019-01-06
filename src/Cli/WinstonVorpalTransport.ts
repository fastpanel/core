/**
 * WinstonVorpalTransport.ts
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */

import Vorpal from 'vorpal';
import TransportStream from 'winston-transport';
import { MESSAGE } from 'triple-beam';

/**
 * 
 */
export interface IWinstonVorpalTransportOptions 
  extends TransportStream.TransportStreamOptions {
  cli: Vorpal;
};

/**
 * 
 */
export class WinstonVorpalTransport extends TransportStream {

  /**
   * 
   */
  protected cli: Vorpal = null;

  /**
   * 
   * @param opts 
   */
  public constructor (opts?: IWinstonVorpalTransportOptions) {
    super(opts);

    if (!opts.cli) {
      throw new Error('Unable to write log without an "Vorpal" instance.');
    }

    this.cli = opts.cli;
  }
  
  /**
   * 
   * @param opts 
   */
  public log (info: any, next: () => void): any {
    this.cli.log(info[MESSAGE]);
    next();
  }

};

/* End of file WinstonVorpalTransport.ts */