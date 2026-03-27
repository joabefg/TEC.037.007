import { biblioteca  } from "./database";
import { buscarlivroPorId } from "./action";

const meuLivro = buscarlivroPorId(1);
console.log(meuLivro?.titulo);