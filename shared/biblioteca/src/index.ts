import { biblioteca } from './database';
import { buscarLivroPorId, atualizarStatus, exibirResumo } from './actions';

console.log("--- Sistema de Biblioteca ---");

// 1. Buscando um livro
const meuLivro = buscarLivroPorId(2);

if (meuLivro) {
  // 2. Exibindo resumo (Desestruturação acontece dentro da função)
  exibirResumo(meuLivro);

  // 3. Atualizando status (Imutabilidade com Spread)
  const livroAtualizado = atualizarStatus(meuLivro, true);
  
  console.log("Status antigo:", meuLivro.disponivel);
  console.log("Status novo:", livroAtualizado.disponivel);
}