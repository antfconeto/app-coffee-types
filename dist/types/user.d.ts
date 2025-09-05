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
//# sourceMappingURL=user.d.ts.map