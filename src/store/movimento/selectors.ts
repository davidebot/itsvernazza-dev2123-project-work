import { createSelector } from "@reduxjs/toolkit";
import CategoriaMovimentoEnum from "../../constants/CategoriaMovimentoEnum";
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

export const saldo = createSelector(
    [movimentoState, userState],
    (state: MovimentiReducerType, userState: UserReducerType): number => {
        const movimenti = state.movimenti.filter(movimento => movimento.beneficiarioIban === userState.logged?.iban || movimento.ordinanteIban === userState.logged?.iban);

        let saldo = 0;
        movimenti.forEach((movimento) => {
            if (movimento.categoria === CategoriaMovimentoEnum.Versamento) {
                saldo += movimento.importo;
            } else {
                saldo -= movimento.importo;
            }
        });
        return saldo;
    }
);
