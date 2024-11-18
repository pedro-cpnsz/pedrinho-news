import { Categoria } from "./categoria.model";
import { Usuario } from "./usuario.model";

export class Noticia {
    id!: number|null;
    titulo!: string|null;
    conteudo!: string|null;
    usuario!: Usuario|null;
    categoria!: Categoria|null;
    data_publicacao!: Date|null;
}