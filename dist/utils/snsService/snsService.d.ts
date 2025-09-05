import { SNSClient } from "@aws-sdk/client-sns";
import { ILoggerCustom } from "../logger/Ilogger";
import { SnsEventPayload, SnsMessageInfo } from "../../types/system";
import { ISnsService } from "./IsnsService";
export declare class SnsService implements ISnsService {
    private logger;
    private snsClient;
    constructor(logger: ILoggerCustom, snsClient: SNSClient);
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
    publishEvent(payload: SnsEventPayload | any, topicArn: string): Promise<void>;
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
    processCoffeeSnsEventPayload(snsInfo: SnsMessageInfo): SnsEventPayload;
}
//# sourceMappingURL=snsService.d.ts.map