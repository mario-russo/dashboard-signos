<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { getAllSignos } from "../service/enumSignos";
import { Conteudo } from "../types";
import { salvar, listaAllCunteudo } from "../service/conteudoService";
import { userStore } from "../store/user";
import { QTableColumn } from "quasar";

const user = userStore()

const conteudo = reactive<Conteudo>({ conteudo: '', idUsuario: user.getUsuario.id, referencia: '', signo: '' })
const accept = ref(false)
const optionSignos = ref();
const lista = ref(false)

onMounted(async () => {
  optionSignos.value = await getAllSignos()
  conteudos.value = await listaAllCunteudo()
})

async function salvarConteudo() {
  await salvar(conteudo)

}
const conteudos = ref()


const columns: QTableColumn[] = [

  { name: 'id', field: 'id', align: 'left', label: 'Id', sortable: true },
  { name: 'referencia', field: 'referencia', align: 'left', label: 'Referência', sortable: true },
  { name: 'signo', field: 'signo', align: 'left', label: 'Signo', sortable: true },
  { name: 'editar', field: 'editar', align: 'center', label: 'Editar', },
  { name: 'remover', field: 'remover', align: 'center', label: 'Deletar', },
]
const layout = ref(false)

</script>
<template>
  <div>
    <section class="centro">
      <section>
        <div class="q-pa-md">
          <section align="right"><q-btn color="white" text-color="black" label="Adicionar de Conteudo"
              @click="lista = !lista" />
          </section>
          <q-table flat bordered title="Treats" :rows="conteudos" :columns="columns" row-key="name">
            <template v-slot:body-cell-editar="props">
              <q-td :props="props">
                <div>
                  <q-btn icon="edit" size="sm" @click="layout = true" />
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-remover="props">
              <q-td :props="props">
                <div>
                  <q-btn icon="delete" size="sm" color="negative" />
                </div>
              </q-td>
            </template>
          </q-table>
        </div>
      </section>
      <q-dialog v-model="lista">
        <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-toolbar-title>Registrar Conteudo</q-toolbar-title>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding>
              <section class="q-gutter-md">
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
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </section>

  </div>
</template>


<style scoped>
.centro {
  width: 800px;
  margin: 50px auto;
}
</style>