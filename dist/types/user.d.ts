import { Role } from "../enums/user";
export type User = {
    id: string;
    name: string;
    role: Role;
    email: string;
    photoUrl: string;
    permissions: string[];
    createdAt: string;
    updatedAt: string;
};
type FirebaseUserMetadata = {
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
export {};
//# sourceMappingURL=user.d.ts.map