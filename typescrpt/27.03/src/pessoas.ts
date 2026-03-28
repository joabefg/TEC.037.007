export interface pessoas {
    id: number
    titulo: string
    autor: string
    ano: number
    disponível: boolean
    categoria: "ação" | "drama" | "terror"
}