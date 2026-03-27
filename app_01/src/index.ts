import { biblioteca } from "./Database.ts";
import { buscarLivroPorId } from "./actions.ts";

const meuLivro = buscarLivroPorId(1);
console.log(meuLivro?.titulo);