"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaType = exports.EventSource = exports.SnsEventsStatus = exports.Entities = exports.SnsEventType = exports.LogTag = void 0;
var LogTag;
(function (LogTag) {
    LogTag["SUCCESS"] = "[SUCCESS]";
    LogTag["ERROR"] = "[ERROR]";
    LogTag["WARNING"] = "[WARNING]";
    LogTag["INFO"] = "[INFO]";
    LogTag["DEBUG"] = "[DEBUG]";
})(LogTag || (exports.LogTag = LogTag = {}));
var SnsEventType;
(function (SnsEventType) {
    SnsEventType["COFFEE_CREATED"] = "COFFEE_CREATED";
    SnsEventType["COFFEE_UPDATED"] = "COFFEE_UPDATED";
    SnsEventType["COFFEE_DELETED"] = "COFFEE_DELETED";
    SnsEventType["ITEM_CHANGED"] = "ITEM_CHANGED";
})(SnsEventType || (exports.SnsEventType = SnsEventType = {}));
var Entities;
(function (Entities) {
    Entities["USER"] = "USER";
    Entities["COFFEE"] = "COFFEE";
    Entities["CATEGORY"] = "CATEGORY";
    Entities["REVIEW"] = "REVIEW";
    Entities["PERMISSION"] = "PERMISSION";
})(Entities || (exports.Entities = Entities = {}));
var SnsEventsStatus;
(function (SnsEventsStatus) {
    SnsEventsStatus["NEW"] = "NEW";
    SnsEventsStatus["UPDATED"] = "UPDATED";
    SnsEventsStatus["DELETED"] = "DELETED";
    SnsEventsStatus["DISABLED"] = "DISABLED";
})(SnsEventsStatus || (exports.SnsEventsStatus = SnsEventsStatus = {}));
var EventSource;
(function (EventSource) {
    EventSource["SVC_USER"] = "SVC-USER";
    EventSource["SVC_COFFEE"] = "SVC-COFFEE";
})(EventSource || (exports.EventSource = EventSource = {}));
var MediaType;
(function (MediaType) {
    MediaType["PHOTO"] = "PHOTO";
    MediaType["VIDEO"] = "VIDEO";
})(MediaType || (exports.MediaType = MediaType = {}));
//# sourceMappingURL=system.js.map