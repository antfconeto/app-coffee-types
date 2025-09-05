/**
 * Custom error class for handling application-specific errors with status codes.
 *
 * Extends the built-in Error class to include a status code and error type.
 * Provides a toJSON method for structured error serialization.
 */
export declare class CustomError extends Error {
    statusCode: number;
    errorType: string;
    constructor(message: string, statusCode: number);
    /**
     * Serializes the error to a JSON string.
     * @returns A JSON string with errorMessage, errorType, and statusCode.
     */
    toJSON(): string;
}
//# sourceMappingURL=customError.d.ts.map