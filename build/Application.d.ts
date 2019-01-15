/**
 * Application.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2019 Desionlab
 * @license   MIT
 */
/// <reference types="node" />
import { Container, Injectable } from "./Di";
/**
 * Class Application
 *
 * Wrap for apps.
 *
 * @version 1.0.0
 */
export declare class Application extends Injectable {
    /**
     * Flag a app is ready.
     */
    isStartup: boolean;
    /**
     *
     */
    protected watchdogTimer: NodeJS.Timer;
    /**
     * Application constructor.
     *
     * @param di Di container instant.
     */
    constructor(di?: Container);
    /**
     * Initialization app.
     */
    init(): Promise<any>;
}
