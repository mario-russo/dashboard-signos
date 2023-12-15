<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "../store/auth";
import { userStore } from "../store/user";
import { login } from "../service/authService";

const store = authStore();
const storeUser = userStore();
const router = useRouter();

const user = reactive({ email: "mario.russo93@hotmail.com", senha: "1234" });

async function logar() {
  const result = await login(user);
  if (result) {
    router.push({ name: "home" });
    store.setToken(result.token);
    storeUser.setUsuario({ id: result.id, nome: result.nome })
  }
}
</script>
<template>
  <section class="login-container">
    <div class="shadow">
      <div>
        <h4 class="text-center">Login Signos</h4>
      </div>
      <div class="inp">
        <q-input v-model="user.email" label="E-mail" />
      </div>
      <div class="inp">
        <q-input v-model="user.senha" label="Senha" />
      </div>
      <div class="inp">
        <q-btn class="btn" color="white" text-color="black" label="Enviar" @click="logar" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.login-container div {
  width: 100%;
  max-width: 600px;
  padding: 10px;
}

.login-container div .inp {
  width: 100%;
  margin-top: 10px;
}

.btn {
  width: 100%;
}
</style>
