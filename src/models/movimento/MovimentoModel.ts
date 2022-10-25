import CategoriaMovimentoEnum from "../../constants/CategoriaMovimentoEnum";

export class MovimentoModel {
    public readonly idMovimento: number = 0;
    public readonly ordinanteDenominazione: string = "";
    public readonly ordinanteIban: string = "";
    public readonly beneficiarioDenominazione: string = "";
    public readonly beneficiarioIban: string = "";
    public readonly causale: string = "";
    public readonly importo: number = 0;
    public readonly data: number = 0;
    public readonly categoria: CategoriaMovimentoEnum = CategoriaMovimentoEnum.Bonifico;

    constructor(data: MovimentoModel) {
        this.idMovimento = data.idMovimento ?? 0;
        this.ordinanteDenominazione = data.ordinanteDenominazione ?? "";
        this.ordinanteIban = data.ordinanteIban ?? "";
        this.beneficiarioDenominazione = data.beneficiarioDenominazione ?? "";
        this.beneficiarioIban = data.beneficiarioIban ?? "";
        this.causale = data.causale ?? "";
        this.importo = data.importo ?? 0;
        this.data = data.data ?? new Date().getTime();
        this.categoria = data.categoria ?? CategoriaMovimentoEnum.Bonifico;
    }
}
