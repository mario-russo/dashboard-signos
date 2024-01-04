import { verify } from '../service/authService'
import routes from './routes'
import {
    RouteLocationNormalized,
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


declare module 'vue-router' {
    interface RouteMeta {
        // é opcional
        isAdmin?: boolean
        // deve ser declarado por cada rota
        autenticacao: boolean
    }
}


router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized,) => {
    if (to.meta.autenticacao && from.path !== '/auth/login' && to.path !== '/auth/login' && !await token()) {
        return { path: '/auth/login' }
    }
})

async function token() {
    const login = await verify()
    if (login === false) return false
    else return true
}

export default router