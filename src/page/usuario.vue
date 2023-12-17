<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { verify } from "../service/authService";
import { Usuario } from "../types";
import { salvar } from "../service/usuarioService";
import { QTableColumn } from "quasar/dist/types/api/qtable";



// const token = ref(localStorage.getItem('token'));

const lista = ref(false)
const usuarios = reactive<Usuario[]>([])

const usuario = reactive<Usuario>({
  id: 0,
  email: "",
  nome: "",
  roles: [],
  senha: ""
})

const roles = ["ADMIN", "USUARIO"]

async function verifica() {
  const result = await verify();
  return result.data;
}

onMounted(async () => {
  console.log(await verifica())
});

async function salvarUsuario() {
  salvar(usuario)
}

const columns: QTableColumn[] = [

  { name: 'id', field: 'id', align: 'left', label: 'Id', sortable: true },
  { name: 'nome', field: 'nome', align: 'left', label: 'Nome', sortable: true },
  { name: 'email', field: 'email', align: 'left', label: 'E-mail', sortable: true },
  { name: 'roles', field: 'roles', align: 'left', label: 'Permissa', sortable: true },
  { name: 'editar', field: 'editar', align: 'center', label: 'Editar', },
  { name: 'remover', field: 'remover', align: 'center', label: 'Deletar', },
]
</script>
<template>
  <div>
    <section>
      <section>
        <div class="q-pa-md">
          <section align="right"><q-btn color="white" text-color="black" label="Adicionar de Usuários"
              @click="lista = !lista" />
          </section>
          <q-table flat bordered title="LISTA DE USUÁRIOS" :rows="usuarios" :columns="columns" row-key="name">
            <template v-slot:body-cell-editar="props">
              <q-td :props="props">
                <!-- <div>
                  <q-btn icon="edit" size="sm" @click="layout = true" />
                </div> -->
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



      <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="lista">
          <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
            <q-header class="bg-primary">
              <q-toolbar>
                <q-btn flat round dense icon="edit" />
                <q-toolbar-title>Cadrastro de Usuario</q-toolbar-title>
                <q-btn flat v-close-popup round dense icon="close" />
              </q-toolbar>
            </q-header>


            <q-page-container>
              <q-page padding>
                <section class="q-gutter-md">
                  <q-input v-model="usuario.nome" label="Nome Do Usuario*" hint="Nome" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Nome Obrigatório']" />

                  <q-input v-model="usuario.email" label="E-mail Do Usuario*" hint="E-mail" lazy-rules
                    :rules="[val => val && val.length > 0 || 'E-mail Obrigatório']" />

                  <q-input type="password" v-model="usuario.senha" label="Senha Do Usuario*" hint="Senha" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Senha Obrigatório']" />


                  <q-select v-model="usuario.roles" :options="roles" color="purple-12" label="Permisão">
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-select>

                  <div>
                    <q-btn label="Submit" type="submit" color="primary" @click="salvarUsuario" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                  </div>
                </section>
              </q-page>
            </q-page-container>
          </q-layout>
        </q-dialog>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
