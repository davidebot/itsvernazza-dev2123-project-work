import { createReducer } from "@reduxjs/toolkit";
import { ContattoModel } from "../../models/contatto/ContattoModel";
import { eliminaContatto, inserimentoContatto, modificaContatto } from "./actions";
import { ContattiReducerType } from "./types";

const initialState: ContattiReducerType = {
    contatti: [
        {
            idContatto: 1,
            denominazione: "Marco Turchiuli",
            iban: "IbanAbcdefgh"
        }
    ]
};

export const contattoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(inserimentoContatto, (state, action) => {
            let idContatto = 1;
            const contattoDaInserire = action.payload;

            if (state.contatti.length > 0) {
                idContatto = (Math.max(...state.contatti.map(contatto => contatto.idContatto))) + 1;
            }
            let nuovoContatto = new ContattoModel(
                {
                    idContatto,
                    ...contattoDaInserire
                }
            );
            state.contatti = [...state.contatti, nuovoContatto];
        })
        .addCase(modificaContatto, (state, action) => {
            debugger;
            const contattoTrovato = action.payload;
            const nuoviContatti = state.contatti.map(contatto => contatto.idContatto === contattoTrovato.idContatto ? contattoTrovato : contatto);
            console.log(state.contatti);
            state.contatti = [...nuoviContatti];
            console.log(state.contatti);
        })
        .addCase(eliminaContatto, (state, action) => {
            const idDaEliminare = action.payload;

            state.contatti = state.contatti.filter((contatto) => contatto.idContatto !== idDaEliminare);
        });
});
