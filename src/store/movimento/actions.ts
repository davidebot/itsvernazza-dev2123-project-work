import { createAction } from "@reduxjs/toolkit";
import InserimentoBonificoModel from "../../models/movimento/InserimentoBonificoModel";
import InserimentoCommissioneModel from "../../models/movimento/InserimentoCommissioneModel";
import InserimentoMovimentoATMModel from "../../models/movimento/InserimentoMovimentoATMModel";

export const inserimentoBonifico = createAction<InserimentoBonificoModel>("inserimentoBonificoModel");

export const inserimentoPrelievo = createAction<InserimentoMovimentoATMModel>("inserimentoPrelievo");

export const inserimentoVersamento = createAction<InserimentoMovimentoATMModel>("inserimentoVersamento");

export const inserimentoCommissione = createAction<InserimentoCommissioneModel>("inserimentoCommissione");
