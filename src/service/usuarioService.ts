import { Usuario } from '../types';
import { api } from './config';

const usuariopath = "usuario"

export async function salvar(usuario: Usuario) {
    try {
        const resultado = api.post('auth/register', usuario)
        return (await resultado).data

    } catch (error) {

    }
}
export async function listaTodosUsuarios() {
    try {
        const resultado = api.get(usuariopath)
        return (await resultado).data
    } catch (error) {

    }
}
export async function autualizarUsuario(usuario: Usuario) {
    try {
        const resultado = await api.patch(usuariopath, usuario)
        return resultado.data
    } catch (error) {

    }
}
export async function deletaUsuario(usuario: Usuario) {
    try {
        const resultado = api.delete(usuariopath + '/' + usuario.id, { data: usuario })
        return (await resultado).data
    } catch (error) {

    }
}