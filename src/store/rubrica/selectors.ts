import { createSelector } from "@reduxjs/toolkit";
import { ContattoModel } from "../../models/contatto/ContattoModel";
import { ContattiReducerType, ContattiState } from "./types";

const contattoState = (state: ContattiState): ContattiReducerType => state.contatto;

export const elencoContatti = createSelector(
    contattoState,
    (state: ContattiReducerType): ContattoModel[] => {
        return state.contatti;
    }
);
