import { UserModel } from "../../models/user/UserModel";

export interface UserReducerType {
    users: UserModel[];
    logged: UserModel | undefined;
    loginError: string;
}

export interface UserState {
    user: UserReducerType;
}
