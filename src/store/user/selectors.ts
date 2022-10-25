import { createSelector } from "@reduxjs/toolkit";
import { UserReducerType, UserState } from "./types";

const userState = (state: UserState): UserReducerType => state.user;

export const currentIban = createSelector(
    userState,
    (state: UserReducerType): string | undefined => {
        return state.logged?.iban;
    }
);

export const userDenominazione = createSelector(
    userState,
    (state: UserReducerType): string | undefined => {
        return `${state.logged?.name} ${state.logged?.surname}`;
    }
);
