import { biblioteca } from "./database";
import { pessoas } from "./pessoas";

//Buscando um livro

export function buscarPessoaID( id:number ): pessoas | undefined{
    return biblioteca.find(pessoas => pessoas.id == id)
};