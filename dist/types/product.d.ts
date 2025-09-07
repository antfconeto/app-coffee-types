import { Media } from "./coffee";
export interface IProduct {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    price: number;
    medias: Media[];
    currency: string;
    weight: number;
    weightUnit: string;
}
export interface IProductItem {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    price: number;
    currency: string;
}
//# sourceMappingURL=product.d.ts.map