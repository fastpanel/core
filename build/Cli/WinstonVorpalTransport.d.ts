/**
 * WinstonVorpalTransport.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
import Vorpal from 'vorpal';
import TransportStream from 'winston-transport';
/**
 *
 */
export interface IWinstonVorpalTransportOptions extends TransportStream.TransportStreamOptions {
    cli: Vorpal;
}
/**
 *
 */
export declare class WinstonVorpalTransport extends TransportStream {
    /**
     *
     */
    protected cli: Vorpal;
    /**
     *
     * @param opts
     */
    constructor(opts?: IWinstonVorpalTransportOptions);
    /**
     *
     * @param opts
     */
    log(info: any, next: () => void): any;
}
