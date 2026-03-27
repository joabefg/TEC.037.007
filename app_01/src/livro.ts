export interface Livro {
    id: Number;
    titulo: string;
    autor: string;
    ano: number;
    disponivel: boolean;
    categoria?: string;
}