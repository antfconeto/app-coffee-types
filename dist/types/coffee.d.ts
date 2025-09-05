import { MediaType } from "../enums/system";
export type Coffee = {
    id: string;
    name: string;
    description: string;
    origin: string;
    roastLevel: 'light' | 'medium' | 'dark' | 'espresso';
    price: number;
    currency: string;
    weight: number;
    categories: Category[];
    weightUnit: 'g' | 'kg' | 'oz' | 'lb';
    seller: Seller;
    isAvailable: boolean;
    stockQuantity: number;
    review: Review;
    medias: Media[];
    createdAt: string;
    updatedAt: string;
};
export type Seller = {
    id: string;
    name: string;
    photoUrl: string;
};
export type Category = {
    id: string;
    icon: string;
    description: string;
    name: string;
};
export type Media = {
    id: string;
    mediaUrl: string;
    mediaType: MediaType;
};
export type Review = {
    reviews: {
        id: string;
        comment: string;
        rating: number;
    }[];
    globalRating: number;
};
//# sourceMappingURL=coffee.d.ts.map