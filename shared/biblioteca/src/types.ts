// Interface para definir a estrutura do objeto
export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
  categoria?: string; // Propriedade opcional (?)
}

// Union Type para limitar os status possíveis
export type StatusSistema = "ativo" | "manutencao" | "offline";