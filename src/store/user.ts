import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { UsuarioStore } from '../types'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const userStore = defineStore('user', () => {
    const user = reactive<UsuarioStore>({ nome: '', id: 0 })

    function setUsuario(usuario: UsuarioStore) {
        user.id = usuario.id
        user.nome = usuario.nome
    }
    const getUsuario = computed(() => user)

    return { setUsuario, getUsuario }
})