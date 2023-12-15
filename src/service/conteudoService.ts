import { Conteudo } from '../types';
import { api } from './config';

const pathConteudo = 'conteudo'

export async function salvar(conteudo: Conteudo) {
    const resultado = await api.post(pathConteudo, conteudo)
    return resultado.data
}