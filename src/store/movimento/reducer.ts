import { createReducer } from "@reduxjs/toolkit";
import CategoriaMovimentoEnum from "../../constants/CategoriaMovimentoEnum";
import { MovimentoModel } from "../../models/movimento/MovimentoModel";
import { inserimentoBonifico } from "./actions";
import { MovimentiReducerType } from "./types";

const initialState: MovimentiReducerType = {
    movimenti: [
        {
            idMovimento: 1,
            beneficiarioDenominazione: "tommaso",
            beneficiarioIban: "IT88N0300203280253948841999",
            categoria: CategoriaMovimentoEnum.Bonifico,
            data: new Date().getTime(),
            importo: 200,
            ordinanteDenominazione: "marco",
            ordinanteIban: "ccccc",
            causale: "causaleMessa"
        }
    ]
};

export const movimentoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(inserimentoBonifico, (state, action) => {
            let idMovimento = 1;

            if (state.movimenti.length > 0) {
                idMovimento = (Math.max(...state.movimenti.map(movimento => movimento.idMovimento))) + 1;
            }
            let nuovoMovimento = new MovimentoModel(
                {
                    ...action.payload,
                    idMovimento,
                    data: new Date().getTime(),
                    categoria: CategoriaMovimentoEnum.Bonifico,

                }
            );
            state.movimenti = [...state.movimenti, nuovoMovimento];
        });
});
