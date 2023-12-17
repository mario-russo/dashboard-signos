export interface UserLogin {
    email: string,
    senha: string
}
export interface Conteudo {
    conteudo: string,
    signo: string,
    referencia: string,
    idUsuario: number

}
export interface UsuarioStore {
    nome: string,
    id: number
}
export interface Usuario {
    id: number,
    nome: string,
    email: string,
    roles: string[],
    senha: string
}