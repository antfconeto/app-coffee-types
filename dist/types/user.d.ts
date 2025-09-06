import { Role } from "../enums/user";
export type User = {
    id: string;
    name: string;
    role: Role;
    email: string;
    photoUrl: string;
    permissions: string[];
    cards: Card[];
    createdAt: string;
    updatedAt: string;
};
export type Card = {
    id: string;
    name: string;
    items: CardItem[];
    totalPrice: number;
    totalQuantity: number;
    createdAt: string;
    updatedAt: string;
};
export type CardItem = {
    id: string;
    name: string;
    price: number;
    unitPrice: string;
    quantity: number;
};
export type FirebaseUserMetadata = {
    creationTime: string;
    lastSignInTime: string;
};
export type FirebaseUserData = {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    disabled: boolean;
    metadata: FirebaseUserMetadata;
};
export type FirebaseAuthEvent = {
    eventCreatedAt: string;
    eventId: string;
    data: any;
    eventSource: string;
    subject: string;
    eventType: string;
    status: string;
};
//# sourceMappingURL=user.d.ts.map