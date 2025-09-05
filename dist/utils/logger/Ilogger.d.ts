export interface ILoggerCustom {
    success(message: string, ...params: any): void;
    error(message: string, ...params: any): void;
    warning(message: string, ...params: any): void;
    info(message: string, ...params: any): void;
    custom(message: string, logTag: string, icon?: string, ...params: any): void;
    debug(message: string, ...params: any[]): void;
}
//# sourceMappingURL=Ilogger.d.ts.map