import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const authStore = defineStore('auth', () => {
    const token = ref<string>()
    const getToken = computed(() => {
        const local = localStorage.getItem('token')
        return local
    } )

    function setToken( chave:string) {
        token.value = 'Bearer '+ chave
        localStorage.setItem('token', token.value)
    }
    
    return {  getToken, setToken }
})