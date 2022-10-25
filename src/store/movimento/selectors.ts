import { createSelector } from "@reduxjs/toolkit";
import { MovimentoModel } from "../../models/movimento/MovimentoModel";
import { UserReducerType, UserState } from "../user/types";
import { MovimentiReducerType, MovimentiState } from "./types";

const movimentoState = (state: MovimentiState): MovimentiReducerType => state.movimento;

const userState = (state: UserState): UserReducerType => state.user;

export const elencoMovimenti = createSelector(
    [movimentoState, userState],
    (state: MovimentiReducerType, userState: UserReducerType): MovimentoModel[] => {
        return state.movimenti.filter(movimento => movimento.beneficiarioIban === userState.logged?.iban || movimento.ordinanteIban === userState.logged?.iban);
    }
);

// export const elencoMovimenti = createSelector(
//     movimentoState,
//     (state: MovimentiReducerType): MovimentoModel[] => {
//         return state.movimenti;
//     }
// );
