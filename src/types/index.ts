export interface UserLogin {
  email: string;
  senha: string;
}
export interface Conteudo {
  id: number;
  conteudo: string;
  signo: string;
  referencia: number;
  idUsuario: number;
  tipo: string;
  usuario?: {
    id: number;
  };
}
export interface UsuarioStore {
  nome: string;
  id: number;
}
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  rule: string[];
  senha: string;
}
