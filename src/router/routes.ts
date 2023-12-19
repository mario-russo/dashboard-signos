import usuario from '../page/usuario.vue'
import NotFound from '../page/NotFound.vue'
import Login from '../page/Login.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'
import PostSignosVue from '../page/PostSignos.vue'

export const routesMenu = [
    {
        path: '/',
        name: 'dashboard',
        component: DefaultLayout,
        children: [{
            path: '/usaurio',
            name: 'usuario',
            component: usuario,
        },
        {
            path: '/post-signos',
            name: 'post',
            component: PostSignosVue,
        }
        ]
    },


]
const routesSimple = [
    { path: '/auth/login', name: 'login', component: Login },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]
const routes = [...routesMenu, ...routesSimple]
export default routes
