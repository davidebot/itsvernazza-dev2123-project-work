import { ContattoModel } from "../../models/contatto/ContattoModel";

export interface ContattiReducerType {
    contatti: ContattoModel[];
}

export interface ContattiState {
    contatto: ContattiReducerType;
}

