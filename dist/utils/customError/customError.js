"use strict";
/**
 * Custom error class for handling application-specific errors with status codes.
 *
 * Extends the built-in Error class to include a status code and error type.
 * Provides a toJSON method for structured error serialization.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    statusCode;
    errorType;
    constructor(message, statusCode) {
        super(message);
        this.name = "CustomError";
        this.statusCode = statusCode;
        this.errorType = `${statusCode}`;
        // @ts-ignore
        Error.captureStackTrace(this, this.constructor);
    }
    /**
     * Serializes the error to a JSON string.
     * @returns A JSON string with errorMessage, errorType, and statusCode.
     */
    toJSON() {
        return JSON.stringify({
            errorMessage: this.message,
            errorType: this.errorType,
            statusCode: this.statusCode
        });
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=customError.js.map