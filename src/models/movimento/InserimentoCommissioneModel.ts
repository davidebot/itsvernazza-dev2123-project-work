export default class InserimentoCommissioneModel {
    importo: number = 0;
    ordinanteIban: string = "";
    ordinanteDenominazione: string = "";

    constructor(data: InserimentoCommissioneModel) {
        this.importo = data.importo ?? 0;
        this.ordinanteIban = data.ordinanteIban ?? "";
        this.ordinanteDenominazione = data.ordinanteDenominazione ?? "";
    }
}
