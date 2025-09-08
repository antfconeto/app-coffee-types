import { DiscountType, PurchaseItemType, PurchaseStatus, PurchaseType } from "../enums/purchase";
import { IProductItem } from "./product";
export type Purchase = {
    id: string;
    items: Item[];
    userId: string;
    status: PurchaseStatus;
    type: PurchaseType;
    createdAt: string;
    updatedAt: string;
};
export type Item = {
    name: string;
    type: PurchaseItemType;
    product: IProductItem;
    quantity: number;
    discount?: {
        type: DiscountType;
        value: number;
    };
    totalPrice: number;
};
//# sourceMappingURL=purchase.d.ts.map