import { UserRole } from "./user-role";

export interface RegisterUser {
    login: String,
    password: String,
    role: UserRole
}
