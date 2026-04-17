import { Livro } from "./livro.ts";
import { biblioteca } from "./Database.ts";

//buscar livro

export function buscarLivroPorId
    (id: number): Livro | undefined {
    return biblioteca.find(livro => livro.id === id);
}