import { Livro } from "./livro.ts";

export const biblioteca: Livro[] = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano: 1899,
        disponivel: true
    }, {
        id: 2,
        titulo: "A dança dos dragões",
        autor: "George R. R. Martin",
        ano: 2011,
        disponivel: true,
        categoria: "Ficção"
    }, {
        id: 3,
        titulo: "Fogo & Sangue",
        autor: "George R. R. Martin",
        ano: 2018,
        disponivel: true,
        categoria: "Ficção"
    }, {
        id: 4,
        titulo: "O Cavaleiro Andante",
        autor: "George R. R. Martin",
        ano: 1998,
        disponivel: false,
        categoria: "Ficção"
    }, {
        id: 5,
        titulo: "Eragon",
        autor: "Christopher Paolini",
        ano: 2001,
        disponivel: false,
        categoria: "Ficção, aventura"
    }, {
        id: 6,
        titulo: "Coraline",
        autor: "Neil Gaiman",
        ano: 2002,
        disponivel: false,
        categoria: "Novela de fantasia/terror infanto-juvenil"
    }
]