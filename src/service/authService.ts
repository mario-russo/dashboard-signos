import { api } from './config'
 const path= 'auth/login'
 const verifyPath= 'auth/verify'

 interface User{
    email:string,
    senha: string
 }
export async function login (user:User){
    const resposta = api.post(path,user)
    return (await resposta).data
}

export async function verify (){
    const resposta = await api.get(verifyPath)
    return  resposta.data
}