export class Categoria {
    id!: number|null;
    nome!: string|null;
    principal!: boolean|null;
    categoria_pai?: Categoria|null;
}