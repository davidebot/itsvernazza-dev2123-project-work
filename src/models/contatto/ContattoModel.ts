export class ContattoModel {
    public readonly idContatto: number = 0;
    public readonly denominazione: string = "";
    public readonly iban: string = "";

    constructor(data: ContattoModel) {
        this.idContatto = data.idContatto ?? 0;
        this.denominazione = data.denominazione ?? "";
        this.iban = data.iban ?? "";
    }
}
