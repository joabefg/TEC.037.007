import { biblioteca } from "./src/database";
import { buscarLivroPorId } from "./src/actions";

const meuLivro = buscarLivroPorId(1);
console.log(meuLivro?.titulo);

// npx tsx index.ts
