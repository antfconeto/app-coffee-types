import { SnsEventPayload, SnsMessageInfo } from "../../types/system";
export interface ISnsService {
    publishEvent(payload: SnsEventPayload | any, topicArn: string): Promise<void>;
    processCoffeeSnsEventPayload(snsInfo: SnsMessageInfo): SnsEventPayload;
}
//# sourceMappingURL=IsnsService.d.ts.map