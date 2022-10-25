import { MovimentoModel } from "./MovimentoModel";

type InserimentoBonificoModel = Pick<MovimentoModel, "beneficiarioDenominazione" | "beneficiarioIban" | "ordinanteDenominazione" | "ordinanteIban" | "causale" | "importo">;

export default InserimentoBonificoModel;
