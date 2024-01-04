import { api } from './config'

const pathEnumSignos = 'signos'

export async function getAllSignos() {
    const resposta = await api.get(pathEnumSignos);
    return (resposta).data
}