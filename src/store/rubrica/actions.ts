import { createAction } from "@reduxjs/toolkit";
import { ContattoModel } from "../../models/contatto/ContattoModel";
import InserimentoContattoModel from "../../models/contatto/InserimentoContattoModel";

export const inserimentoContatto = createAction<InserimentoContattoModel>("inserimentoContatto");
export const modificaContatto = createAction<ContattoModel>("modificaContatto");
export const eliminaContatto = createAction<number>("eliminaContatto");
