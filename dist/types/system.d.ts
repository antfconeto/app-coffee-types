import { Entities, EventSource, SnsEventType, SnsEventsStatus } from "../enums/system";
import { ILoggerCustom } from "../utils/logger/Ilogger";
import { ISnsService } from "../utils/snsService/IsnsService";
export interface ILogger {
    info(message: string, ...params: any): void;
    error(message: string, ...params: any): void;
    warn(message: string, ...params: any): void;
    debug(message: string, ...params: any): void;
}
export interface IDatabaseClient {
    send(command: any): Promise<any>;
}
export type ServiceDependecies<T> = {
    logger: ILoggerCustom;
    entityDao?: T;
    adictionalDaos?: [];
    snsService?: ISnsService;
    adictionalServices?: any[];
};
export type DaoDependecies = {
    logger: ILoggerCustom;
    tableName: string;
    ddb: IDatabaseClient;
};
export interface SnsEventPayload {
    eventCreatedAt: string;
    eventId: string;
    data: any;
    eventSource: EventSource;
    subject: string;
    eventType: SnsEventType | Entities;
    status: SnsEventsStatus | string;
}
export type SnsMessageInfo = {
    data: any;
    eventType: SnsEventType | Entities;
    eventStatus: SnsEventType | string;
    subject?: string;
    eventSource: EventSource;
};
//# sourceMappingURL=system.d.ts.map