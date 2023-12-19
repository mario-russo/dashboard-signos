<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { getAllSignos } from "../service/enumSignos";
import { Conteudo } from "../types";
import { salvar, listaAllCunteudo, deleteConteudo } from "../service/conteudoService";
import { userStore } from "../store/user";
import { Loading, Notify, QTableColumn } from "quasar";

const user = userStore().getUsuario

const conteudo = reactive<Conteudo>({ conteudo: '', idUsuario: user.id, referencia: '', signo: '', id: 0 })
const optionSignos = ref();
const lista = ref(false)

onMounted(async () => {
  loadingPage()
})
async function loadingPage() {
  Loading.show()
  try {

    optionSignos.value = await getAllSignos()
    conteudos.value = await listaAllCunteudo()
    Loading.hide()
  } catch (error) {
    Notify.create({
      message: 'Erro ao carregar a pagina',
      type: 'negative'
    })
    Loading.hide()
  } finally {
    Loading.hide()
  }
}

async function salvarConteudo() {
  try {
    await salvar(conteudo)
    lista.value = !lista
    Notify.create({
      message: 'Conteudo salvo com sucesso!!!',
      position: 'center',
      color: 'light-green-5'
    })
    loadingPage()
  } catch (error) {
    Notify.create({
      message: 'Erro ao salvar',
      type: 'negative',
      position: 'center'
    })
  }

}
async function removeConteudo(conteudoTable: Conteudo) {
  let conteudodelete = conteudoTable;
  Loading.show
  try {
    await deleteConteudo(conteudodelete)
    loadingPage()
    lista.value = !lista
    Notify.create({
      message: 'Conteudo salvo com sucesso!!!',
      position: 'center',
      color: 'light-green-5'
    })
    Loading.hide()
  } catch (error) {
    Notify.create({
      message: 'Erro ao salvar',
      type: 'negative',
      position: 'center'
    })
  }


}
function onReset() {
  conteudo.conteudo = ''
  conteudo.referencia = ''
  conteudo.signo = ''
  lista.value = !lista

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
          <q-table flat bordered title="LISTA DE CONTÉUDO" :rows="conteudos" :columns="columns" row-key="name">
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
                  <q-btn icon="delete" size="sm" color="negative" @click="removeConteudo(props.row)" />
                </div>
              </q-td>
            </template>
          </q-table>
        </div>
      </section>
      <q-dialog v-model="lista" @before-hide="onReset">
        <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
          <q-header class="bg-primary">
            <q-toolbar>
              <q-toolbar-title>Registrar Conteudo</q-toolbar-title>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding>
              <section class="q-gutter-md">
                <q-select required v-model="conteudo.signo" :options="optionSignos" color="purple-12"
                  label="Selecione o Signo" :rules="[
                    val => val !== null && val !== '' || 'Escolha um Signo',
                  ]">
                  <template v-slot:prepend>
                    <q-icon name="event" />
                  </template>
                </q-select>
                <q-input v-model="conteudo.referencia" label="Referência*" hint="Referencia Do Signo" lazy-rules
                  :rules="[val => val && val.length > 0 || 'Não Pode Ser Vázio']" />


                <q-input v-model="conteudo.conteudo" type="textarea" label="Digite o Texto Do Signo" :rules="[
                  val => val !== null && val !== '' || 'Não Pode Ser Vázio',
                  val => val < 500 || 'Minimo 500 Letras'
                ]" />

                <div>
                  <q-btn label="Submit" type="submit" color="primary" @click="salvarConteudo" />
                  <q-btn label="Reset" type="reset" color="primary" @click="onReset" flat class="q-ml-sm" />
                </div>
              </section>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </section>
  </div>
</template>


<style scoped></style>