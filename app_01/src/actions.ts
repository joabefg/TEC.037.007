import { Livro } from "./livro";
import { biblioteca } from "./database";

export function buscarLivroPorId(id: number): Livro | undefined {
  return biblioteca.find(livro => livro.id === id);
}
