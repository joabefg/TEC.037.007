import { Livro } from './types';
import { biblioteca } from './database';

// Função para buscar um livro (Tipagem de retorno)
export function buscarLivroPorId(id: number): Livro | undefined {
  return biblioteca.find(livro => livro.id === id);
}

// Função para atualizar disponibilidade usando Spread Operator
export function atualizarStatus(livro: Livro, novoStatus: boolean): Livro {
  // Retornamos um NOVO objeto mantendo o que já existia e alterando apenas um campo
  return { 
    ...livro, 
    disponivel: novoStatus 
  };
}

// Função usando Desestruturação no argumento
export function exibirResumo({ titulo, autor }: Livro): void {
  console.log(`Livro: ${titulo} | Autor: ${autor}`);
}