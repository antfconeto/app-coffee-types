"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = exports.MediaType = exports.EventSource = exports.SnsEventsStatus = exports.Entities = exports.SnsEventType = exports.LogTag = void 0;
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
    SnsEventType["USER_CREATED"] = "USER_CREATED";
    SnsEventType["USER_UPDATED"] = "USER_UPDATED";
    SnsEventType["USER_DELETED"] = "USER_DELETED";
    SnsEventType["ITEM_CHANGED"] = "ITEM_CHANGED";
    SnsEventType["PRODUCT_CREATED"] = "PRODUCT_CREATED";
    SnsEventType["PRODUCT_UPDATED"] = "PRODUCT_UPDATED";
    SnsEventType["PRODUCT_DELETED"] = "PRODUCT_DELETED";
})(SnsEventType || (exports.SnsEventType = SnsEventType = {}));
var Entities;
(function (Entities) {
    Entities["USER"] = "USER";
    Entities["COFFEE"] = "COFFEE";
    Entities["CATEGORY"] = "CATEGORY";
    Entities["REVIEW"] = "REVIEW";
    Entities["PRODUCT"] = "PRODUCT";
    Entities["PERMISSION"] = "PERMISSION";
    Entities["PURCHASE"] = "PURCHASE";
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
var EventType;
(function (EventType) {
    EventType["USER_CREATED"] = "USER_CREATED";
    EventType["USER_UPDATED"] = "USER_UPDATED";
    EventType["USER_DELETED"] = "USER_DELETED";
    EventType["COFFEE_CREATED"] = "COFFEE_CREATED";
    EventType["COFFEE_UPDATED"] = "COFFEE_UPDATED";
    EventType["COFFEE_DELETED"] = "COFFEE_DELETED";
    EventType["PRODUCT_CREATED"] = "PRODUCT_CREATED";
    EventType["PRODUCT_UPDATED"] = "PRODUCT_UPDATED";
    EventType["PRODUCT_DELETED"] = "PRODUCT_DELETED";
    EventType["PURCHASE_CREATED"] = "PURCHASE_CREATED";
    EventType["PURCHASE_UPDATED"] = "PURCHASE_UPDATED";
    EventType["PURCHASE_DELETED"] = "PURCHASE_DELETED";
})(EventType || (exports.EventType = EventType = {}));
//# sourceMappingURL=system.js.map