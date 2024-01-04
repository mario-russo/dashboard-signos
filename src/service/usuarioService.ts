import { Usuario } from "../types";
import { api } from "./config";

const usuariopath = "usuario";

export async function salvar(usuario: Usuario) {
  const resultado = api.post("auth/register", usuario);
  return (await resultado).data;
}
export async function listaTodosUsuarios() {
  const resultado = api.get(usuariopath);
  return (await resultado).data;
}
export async function autualizarUsuario(usuario: Usuario) {
  const resultado = await api.put(usuariopath + "/" + usuario.id, usuario);
  return resultado.data;
}
export async function deletaUsuario(usuario: Usuario) {
  const resultado = api.delete(usuariopath + "/" + usuario.id, {
    data: usuario,
  });
  return (await resultado).data;
}
