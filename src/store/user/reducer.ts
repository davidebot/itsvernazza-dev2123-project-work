import { createReducer } from "@reduxjs/toolkit";
import { userLogin } from "./actions";
import { UserReducerType } from "./types";

const initialState: UserReducerType = {
    users: [
        {
            username: "mario.rossi@test.it",
            password: "123456",
            name: "Mario",
            surname: "Rossi",
            iban: "IT88N0300203280253948841999"
        },
        {
            username: "francesca.bianchi@test.it",
            password: "654321",
            name: "Francesca",
            surname: "Bianchi",
            iban: "IT30A0300203280117363366565"
        }
    ],
    logged: undefined,
    loginError: ""
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(userLogin, (state, action) => {
            const logged = state.users
                .find(user =>
                    user.username === action.payload.username &&
                    user.password === action.payload.password
                );
            if (logged) {
                state.logged = logged;
                state.loginError = "";
            } else {
                state.logged = undefined;
                state.loginError = "Utente o password non validi";
            }
        });
});
