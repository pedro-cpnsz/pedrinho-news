export class Categoria {
    id!: number|null;
    nome!: string|null;
    categoria_pai?: Categoria|null;
}