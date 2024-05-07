export class Retirada {
    medicamentoQuantidades: {
        medicamentoId: number;
        quantidade: number;
    }[];
    funcionarioId: number;
    pacienteId: number;

    constructor(retirada?: Partial<Retirada>) {
        if (retirada) {
            Object.assign(this, retirada);
        }
    }
}
