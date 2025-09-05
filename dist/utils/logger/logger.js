"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerCustom = void 0;
const logger_1 = require("@aws-lambda-powertools/logger");
const system_1 = require("../../enums/system");
class LoggerCustom {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    success(message, ...params) {
        this.logger.info(`✅ ${system_1.LogTag.SUCCESS} - ${message}`, ...params);
    }
    error(message, ...params) {
        this.logger.error(`❌ ${system_1.LogTag.ERROR} - ${message}`, ...params);
    }
    warning(message, ...params) {
        this.logger.warn(`⚠️ ${system_1.LogTag.WARNING} - ${message}`, ...params);
    }
    info(message, ...params) {
        this.logger.info(`ℹ️ ${system_1.LogTag.INFO} - ${message}`, ...params);
    }
    debug(message, ...params) {
        this.logger.debug(`🐞 ${system_1.LogTag.DEBUG} - ${message}`, ...params);
    }
    custom(message, logTag, icon, ...params) {
        this.logger.info(`${icon ?? '🔭'} ${logTag} - ${message}`, ...params);
    }
}
exports.LoggerCustom = LoggerCustom;
/**
 * Singleton utility for providing a centralized logger instance.
 *
 * Uses AWS Lambda Powertools Logger to ensure a single logger instance is used throughout the application.
 * The logger is configured with the service name "svc-house" and log level from the LOG_LEVEL environment variable.
 */
class LoggerSingleton {
    static instance;
    /**
     * Returns the singleton Logger instance.
     * If it does not exist, it creates one with the configured service name and log level.
     * @returns {LoggerCustom} The singleton Logger instance.
     */
    static getInstance(serviceName, logLevel) {
        if (!LoggerSingleton.instance) {
            let logger = new logger_1.Logger({
                serviceName: serviceName,
                logLevel: logLevel || "INFO",
            });
            LoggerSingleton.instance = new LoggerCustom(logger);
        }
        return LoggerSingleton.instance;
    }
}
exports.default = LoggerSingleton;
//# sourceMappingURL=logger.js.map