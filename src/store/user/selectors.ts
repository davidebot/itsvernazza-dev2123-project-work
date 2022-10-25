import { createSelector } from "@reduxjs/toolkit";
import { UserReducerType, UserState } from "./types";

const userState = (state: UserState): UserReducerType => state.user;

export const currentIban = createSelector(
    userState,
    (state: UserReducerType): string | undefined => {
        return state.logged?.iban;
    }
);


export const isLogged = createSelector(
    userState,
    (state: UserReducerType): boolean => {

        return state.logged !== undefined;
    }
);

export const loginError = createSelector(
    userState,
    (state: UserReducerType): string => {

        return state.loginError;
    }
);
