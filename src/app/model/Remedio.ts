export class Remedio {
    id?: number;
    nomeMedicamento?: string;
    dosagem?: number;
    medidaDosagem?: string;
    descricao?: string;
    imagem?: string;
    estoque?: number;

    constructor(remedio?: Partial<Remedio>) {
        if (remedio) {
            Object.assign(this, remedio);
        }
    }
}
