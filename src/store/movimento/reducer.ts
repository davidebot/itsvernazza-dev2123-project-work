import { createReducer } from "@reduxjs/toolkit";
import CategoriaMovimentoEnum from "../../constants/CategoriaMovimentoEnum";
import { MovimentoModel } from "../../models/movimento/MovimentoModel";
import { inserimentoBonifico, inserimentoCommissione, inserimentoPrelievo, inserimentoVersamento } from "./actions";
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
        })
        .addCase(inserimentoVersamento, (state, action) => {
            let idMovimento = 1;

            if (state.movimenti.length > 0) {
                idMovimento = (Math.max(...state.movimenti.map(movimento => movimento.idMovimento))) + 1;
            }

            let nuovoMovimento = new MovimentoModel(
                {
                    ...action.payload,
                    idMovimento,
                    data: new Date().getTime(),
                    categoria: CategoriaMovimentoEnum.Versamento,
                    causale: "Versamento contante",
                }
            );
            state.movimenti = [...state.movimenti, nuovoMovimento];
        })
        .addCase(inserimentoPrelievo, (state, action) => {
            let idMovimento = 1;

            if (state.movimenti.length > 0) {
                idMovimento = (Math.max(...state.movimenti.map(movimento => movimento.idMovimento))) + 1;
            }

            let nuovoMovimento = new MovimentoModel(
                {
                    ...action.payload,
                    idMovimento,
                    data: new Date().getTime(),
                    categoria: CategoriaMovimentoEnum.Prelievo,
                    causale: "Prelievo contante",
                }
            );
            state.movimenti = [...state.movimenti, nuovoMovimento];
        })
        .addCase(inserimentoCommissione, (state, action) => {
            let idMovimento = 1;

            if (state.movimenti.length > 0) {
                idMovimento = (Math.max(...state.movimenti.map(movimento => movimento.idMovimento))) + 1;
            }

            let commissione = new MovimentoModel(
                {
                    idMovimento: idMovimento++,
                    ordinanteDenominazione: action.payload.ordinanteDenominazione,
                    ordinanteIban: action.payload.ordinanteIban,
                    beneficiarioDenominazione: action.payload.ordinanteDenominazione,
                    beneficiarioIban: action.payload.ordinanteIban,
                    data: new Date().getTime(),
                    categoria: CategoriaMovimentoEnum.Commissione,
                    importo: action.payload.importo,
                    causale: "Commissioni bancarie"
                }
            );

            state.movimenti = [...state.movimenti, commissione];
        });
});
