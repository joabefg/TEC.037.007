import { Livro } from './livro';
import { biblioteca } from './database';

// buscar livro 
export function buscarlivroPorId(id: number): Livro | undefined  {
    return biblioteca.find(livro => livro.id == id);
}

