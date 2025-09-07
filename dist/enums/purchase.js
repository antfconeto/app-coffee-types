"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountType = exports.PurchaseItemType = exports.PurchaseType = exports.PurchaseStatus = void 0;
var PurchaseStatus;
(function (PurchaseStatus) {
    PurchaseStatus["PENDING"] = "PENDING";
    PurchaseStatus["PAID"] = "PAID";
    PurchaseStatus["FAILED"] = "FAILED";
    PurchaseStatus["CANCELLED"] = "CANCELLED";
})(PurchaseStatus || (exports.PurchaseStatus = PurchaseStatus = {}));
var PurchaseType;
(function (PurchaseType) {
    PurchaseType["CREDIT"] = "CREDIT";
    PurchaseType["DEBIT"] = "DEBIT";
    PurchaseType["PIX"] = "PIX";
})(PurchaseType || (exports.PurchaseType = PurchaseType = {}));
var PurchaseItemType;
(function (PurchaseItemType) {
    PurchaseItemType["PRODUCT"] = "PRODUCT";
})(PurchaseItemType || (exports.PurchaseItemType = PurchaseItemType = {}));
var DiscountType;
(function (DiscountType) {
    DiscountType["PERCENTAGE"] = "PERCENTAGE";
    DiscountType["FIXED"] = "FIXED";
})(DiscountType || (exports.DiscountType = DiscountType = {}));
//# sourceMappingURL=purchase.js.map