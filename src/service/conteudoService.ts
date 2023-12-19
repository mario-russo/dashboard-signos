import { Conteudo } from '../types';
import { api } from './config';

const pathConteudo = 'conteudo'

export async function salvar(conteudo: Conteudo) {
    const resultado = api.post(pathConteudo, conteudo)
    return (await resultado).data
}
export async function listaAllCunteudo() {
    const resultado = api.get(pathConteudo)
    return (await resultado).data
}
export async function deleteConteudo(conteudo: Conteudo) {
    const resultado = api.delete(pathConteudo, { data: conteudo })
    return (await resultado).data
}