import usuario from "../page/usuario.vue";
import NotFound from "../page/NotFound.vue";
import Login from "../page/Login.vue";
import DefaultLayout from "../layout/DefaultLayout.vue";
import PostSignosVue from "../page/PostSignos.vue";

export const routesMenu = [
  {
    path: "/",
    name: "Dashboard",
    component: DefaultLayout,
    meta: {
      autenticacao: true,
    },
    children: [
      {
        path: "/usuario",
        name: "Usuário",
        component: usuario,
        meta: {
          autenticacao: true,
        },
      },
      {
        path: "/conteudo",
        name: "Conteúdo",
        component: PostSignosVue,

        meta: {
          autenticacao: true,
        },
      },
    ],
  },
];
const routesSimple = [
  { path: "/auth/login", name: "login", component: Login },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const routes = [...routesMenu, ...routesSimple];
export default routes;
