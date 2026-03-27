import { biblioteca } from "./database";
import { buscarLivroPorId } from "./actions";

const meuLivro = buscarLivroPorId(1);
console.log(meuLivro?.titulo); // Output: "Dom Casmurro"

// npx ts-node index.ts