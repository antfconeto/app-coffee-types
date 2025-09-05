import { ILogger } from '../../types/system';
import { LogLevel } from '@aws-lambda-powertools/logger/types';
import { ILoggerCustom } from './Ilogger';
export declare class LoggerCustom implements ILoggerCustom {
    private logger;
    constructor(logger: ILogger);
    success(message: string, ...params: any[]): void;
    error(message: string, ...params: any[]): void;
    warning(message: string, ...params: any[]): void;
    info(message: string, ...params: any[]): void;
    debug(message: string, ...params: any[]): void;
    custom(message: string, logTag: string, icon?: string, ...params: any): void;
}
/**
 * Singleton utility for providing a centralized logger instance.
 *
 * Uses AWS Lambda Powertools Logger to ensure a single logger instance is used throughout the application.
 * The logger is configured with the service name "svc-house" and log level from the LOG_LEVEL environment variable.
 */
declare class LoggerSingleton {
    private static instance;
    /**
     * Returns the singleton Logger instance.
     * If it does not exist, it creates one with the configured service name and log level.
     * @returns {LoggerCustom} The singleton Logger instance.
     */
    static getInstance(serviceName: string, logLevel?: LogLevel): LoggerCustom;
}
export default LoggerSingleton;
//# sourceMappingURL=logger.d.ts.map