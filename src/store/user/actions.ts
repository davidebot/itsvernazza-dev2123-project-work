import { createAction } from "@reduxjs/toolkit";
import { UserLoginViewModel } from "../../models/user/UserLoginViewModel";

export const userLogin = createAction<UserLoginViewModel, "user/login">("user/login");

export const userLogout = createAction<void, "user/logout">("user/logout");

export const userDelete = createAction<void, "user/delete">("user/delete");
