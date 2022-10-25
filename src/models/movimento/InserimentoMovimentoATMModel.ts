export default class InserimentoMovimentoATMModel {
    importo: number = 0;
    beneficiarioIban: string = "";
    ordinanteIban: string = "";
    ordinanteDenominazione: string = "";
    beneficiarioDenominazione: string = "";

    constructor(data: InserimentoMovimentoATMModel) {
        this.importo = data.importo ?? 0;
        this.beneficiarioIban = data.beneficiarioIban ?? "";
        this.beneficiarioDenominazione = data.beneficiarioDenominazione ?? "";
        this.ordinanteIban = data.ordinanteIban ?? "";
        this.ordinanteDenominazione = data.ordinanteDenominazione ?? "";
    }
}
