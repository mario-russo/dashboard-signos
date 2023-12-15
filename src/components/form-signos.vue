<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { getAllSignos } from "../service/enumSignos";
import { Conteudo } from "../types";
import { salvar } from "../service/conteudoService";
import { userStore } from "../store/user";

const user = userStore()

const conteudo = reactive<Conteudo>({ conteudo: '', idUsuario: user.getUsuario.id, referencia: '', signo: '' })
const accept = ref(false)
const optionSignos = ref();

onMounted(async () => {
  optionSignos.value = await getAllSignos()
})

async function salvarConteudo() {
  await salvar(conteudo)
}

</script>
<template>
  <div>
    <section class="centro">
      <section> class="q-gutter-md">
        <q-select v-model="conteudo.signo" :options="optionSignos" color="purple-12" label="Selecione o Signo">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
        <q-input v-model="conteudo.referencia" label="Referência*" hint="Name and surname" lazy-rules
          :rules="[val => val && val.length > 0 || 'Please type something']" />


        <q-input v-model="conteudo.conteudo" type="textarea" label="Digite o Texto Do Signo" />
        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" @click="salvarConteudo" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </section>
    </section>
    {{ conteudo.conteudo.length }}
  </div>
</template>


<style scoped>
.centro {
  width: 800px;
  margin: 50px auto;
}
</style>