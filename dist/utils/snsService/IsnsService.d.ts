import { SnsEventPayload, SnsMessageInfo } from "../../types/system";
export interface ISnsService {
    publishEvent(payload: SnsEventPayload | any, topicArn: string): Promise<void>;
    processSnsEventPayload(snsInfo: SnsMessageInfo): SnsEventPayload;
}
//# sourceMappingURL=IsnsService.d.ts.map