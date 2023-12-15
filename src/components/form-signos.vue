<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAllSignos } from "../service/enumSignos";

const signo = ref(null)
const conteudo = ref(null)
const referencia = ref(null)
const accept = ref(false)
const optionSignos = ref();

onMounted(async () => {
  optionSignos.value = await getAllSignos()
})
</script>
<template>
  <div>
    <section class="centro">
      <q-form class="q-gutter-md">
        <q-select v-model="signo" :options="optionSignos" color="purple-12" label="Selecione o Signo">
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-select>
        <q-input v-model="referencia" label="Referência*" hint="Name and surname" lazy-rules
          :rules="[val => val && val.length > 0 || 'Please type something']" />


        <q-input v-model="conteudo" type="textarea" label="Digite o Texto Do Signo" />
        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </section>

  </div>
</template>


<style scoped>
.centro {
  width: 800px;
  margin: 50px auto;
}
</style>