import { api } from './config'
const path = 'auth/login'
const verifyPath = 'auth/verify'

interface User {
    email: string,
    senha: string
}
export async function login(user: User) {
    const resposta = await api.post(path, user)
    return (resposta).data
}

export async function verify() {
    const resposta = await api.get(verifyPath)
    return resposta.data
}