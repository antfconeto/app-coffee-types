"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsService = void 0;
const client_sns_1 = require("@aws-sdk/client-sns");
const customError_1 = require("../customError/customError");
const crypto_1 = require("crypto");
class SnsService {
    logger;
    snsClient;
    constructor(logger, snsClient) {
        this.logger = logger;
        this.snsClient = snsClient;
    }
    /**
     * Publishes a message to the specified SNS topic.
     *
     * Serializes the payload and sends it as a message to the given SNS topic ARN.
     * Logs the publishing process and handles errors.
     *
     * @param payload - The message payload to publish.
     * @param topicArn - The ARN of the SNS topic to publish to.
     * @throws Error if the payload is invalid or if publishing fails.
     */
    async publishEvent(payload, topicArn) {
        if (!payload) {
            this.logger.error(`❌ Invalid data provided to publish event sns`);
            throw new Error(`❌ Invalid data provided to publish event sns`);
        }
        try {
            const message = JSON.stringify({
                default: JSON.stringify(payload)
            });
            this.logger.info(`📤 Sending SNS Message: ${message}}`);
            const command = new client_sns_1.PublishCommand({
                TopicArn: topicArn,
                Message: message,
                MessageStructure: "json",
            });
            const response = await this.snsClient.send(command);
            this.logger.info("📨 Message published successfully", { response });
            return;
        }
        catch (error) {
            this.logger.error(`❌ Failed to publish SNS message: ${error.message}`);
            throw new Error(`❌ Failed to publish SNS message: ${error.message}`);
        }
    }
    /**
     * Processes and builds a standardized SNS event payload for house-related events.
     *
     * Generates a unique event ID, sets the creation timestamp, serializes the data,
     * and includes event source, subject, type, and status.
     *
     * @param snsInfo - The information required to build the SNS event payload.
     * @returns The constructed SnsEventPayload object.
     * @throws CustomError if the snsInfo data is invalid.
     */
    processSnsEventPayload(snsInfo) {
        if (!snsInfo.data) {
            this.logger.error(`❌ Invalid data provided to process event sns body, ${JSON.stringify({ data: snsInfo.data })}`);
            throw new customError_1.CustomError(`❌ Invalid data provided to process event sns body`, 400);
        }
        const payload = {
            eventId: (0, crypto_1.randomUUID)(),
            eventCreatedAt: new Date().toISOString(),
            data: JSON.stringify(snsInfo.data),
            eventSource: snsInfo.eventSource,
            subject: snsInfo.subject || "NO_SUBJECT",
            eventType: snsInfo.eventType,
            status: snsInfo.eventStatus
        };
        this.logger.info(`▶️ Created message sns payload: ${JSON.stringify(payload)}`);
        return payload;
    }
}
exports.SnsService = SnsService;
//# sourceMappingURL=snsService.js.map