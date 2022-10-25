import { ContattoModel } from "./ContattoModel";

type InserimentoContattoModel = Omit<ContattoModel, "idContatto">;

export default InserimentoContattoModel;
