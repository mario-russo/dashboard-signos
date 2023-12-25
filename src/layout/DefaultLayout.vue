<script setup lang="ts">
import { ref } from "vue";
import { routesMenu } from "../router/routes";
import { authStore } from '../store/auth'
import { userStore } from '../store/user'
import { useRouter } from "vue-router";
const router = useRouter()
const { setToken } = authStore()
const { setUsuario } = userStore()
const usuario = userStore().getUsuario
function logout() {
  setToken('')
  setUsuario({ id: 0, nome: '' })
  router.push({ path: '/auth/login' })
}
const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const rota = routesMenu;
</script>
<template>
  <div>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
            </q-avatar>
            Dashboard Signos
          </q-toolbar-title>
          <q-separator />
          {{ usuario.nome }}
          <q-separator />
          <q-btn dense flat round icon="exit_to_app" @click="logout" />
        </q-toolbar>
      </q-header>

      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-list v-for="link in rota">
          <q-item clickable v-close-popup>
            <q-item-section>
              <router-link class="link" :to="link.path">{{ link.name }}</router-link>
            </q-item-section>
          </q-item>
          <q-list v-for="nav in link.children">
            <q-item clickable v-close-popup>
              <q-item-section>
                <router-link class="link" :to="nav.path">{{
                  nav.name
                }}</router-link>
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style scoped>
.link {
  /* Adicione estilos desejados aqui */
  color: rgb(33, 33, 36);
  /* Exemplo: tornar o texto azul */
  text-decoration: none;
  /* Exemplo: sublinhar o texto */
}
</style>
