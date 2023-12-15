import { UserLogin } from '../types'
import { api } from './config'
const path = 'auth/login'
const verifyPath = 'auth/verify'


export async function login(user: UserLogin) {
    const resposta = await api.post(path, user)
    return (resposta).data
}

export async function verify() {
    const resposta = await api.get(verifyPath)
    return resposta.data
}