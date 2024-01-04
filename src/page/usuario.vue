<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { Usuario } from "../types";
import {
  listaTodosUsuarios,
  salvar,
  deletaUsuario,
  autualizarUsuario,
} from "../service/usuarioService";
import { QTableColumn } from "quasar/dist/types/api/qtable";
import { Loading, Notify } from "quasar";

const lista = ref(false);
const usuarios = ref([]);

const usuario = reactive<Usuario>({
  id: 0,
  nome: "",
  email: "",
  rule: [],
  senha: "",
});

onMounted(async () => {
  await loadPage();
});
async function loadPage() {
  try {
    Loading.show();
    usuarios.value = await listaTodosUsuarios();
    Loading.hide();
  } catch (error) {
    Notify.create({
      type: "negative",
      message: "Erro ao Listar Usuário!!!",
    });
    Loading.hide();
  }
}

async function salvarUsuario() {
  try {
    Loading.show();
    if (usuario.id === 0) {
      await salvar(usuario);
      await loadPage();
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Usuário salvo com sucesso!!!",
      });
      lista.value = !lista;
    } else {
      await autualizarUsuario(usuario);
      await loadPage();
      Loading.hide();
      Notify.create({
        type: "positive",
        message: "Usuário Atualizado com sucesso!!!",
      });
      lista.value = !lista;
    }
  } catch (error) {
    Loading.hide();
    Notify.create({
      type: "negative",
      message: "Erro ao salvar Usuário",
    });
  }
}
async function deletar(usuario: Usuario) {
  try {
    Loading.show();
    await deletaUsuario(usuario);
    await loadPage();
    Notify.create({
      type: "positive",
      message: "Usuário deletado com sucesso!!!",
    });
  } catch (error) {
    Notify.create({
      type: "negative",
      message: "Erro ao deletar usuário" + error,
    });
  }
}
async function editiUsuario(usuarioEdit: Usuario) {
  lista.value = !lista.value;
  usuario.email = usuarioEdit.email;
  usuario.id = usuarioEdit.id;
  usuario.rule = usuario.rule;
  usuario.nome = usuarioEdit.nome;
}
function onReset() {
  usuario.email = "";
  usuario.id = 0;
  usuario.nome = "";
  usuario.rule = [];
  usuario.email = "";
}

const columns: QTableColumn[] = [
  { name: "id", field: "id", align: "left", label: "Id", sortable: true },
  { name: "nome", field: "nome", align: "left", label: "Nome", sortable: true },
  {
    name: "email",
    field: "email",
    align: "left",
    label: "E-mail",
    sortable: true,
  },
  {
    name: "rules",
    field: "rules",
    align: "left",
    label: "Permissa",
    sortable: true,
  },
  { name: "editar", field: "editar", align: "center", label: "Editar" },
  { name: "remover", field: "remover", align: "center", label: "Deletar" },
];
</script>
<template>
  <div>
    <section>
      <section>
        <div class="q-pa-md">
          <section align="right">
            <q-btn
              color="white"
              text-color="black"
              label="Adicionar de Usuários"
              @click="lista = !lista"
            />
          </section>
          <q-table
            flat
            bordered
            title="LISTA DE USUÁRIOS"
            :rows="usuarios"
            :columns="columns"
            row-key="name"
          >
            <template v-slot:body-cell-editar="props">
              <q-td :props="props">
                <div>
                  <q-btn
                    icon="edit"
                    size="sm"
                    @click="editiUsuario(props.row)"
                  />
                </div>
              </q-td>
            </template>
            <template v-slot:body-cell-remover="props">
              <q-td :props="props">
                <div>
                  <q-btn
                    icon="delete"
                    size="sm"
                    color="negative"
                    @click="deletar(props.row)"
                  />
                </div>
              </q-td>
            </template>
          </q-table>
        </div>
      </section>

      <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="lista" @hide="onReset">
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
                  <q-input
                    v-model="usuario.nome"
                    label="Nome Do Usuario*"
                    hint="Nome"
                    lazy-rules
                    :rules="[
                      (val) => (val && val.length > 0) || 'Nome Obrigatório',
                    ]"
                  />

                  <q-input
                    v-model="usuario.email"
                    label="E-mail Do Usuario*"
                    hint="E-mail"
                    lazy-rules
                    :rules="[
                      (val) => (val && val.length > 0) || 'E-mail Obrigatório',
                    ]"
                  />

                  <q-input
                    type="password"
                    v-model="usuario.senha"
                    label="Senha Do Usuario*"
                    hint="Senha"
                    lazy-rules
                    :rules="[
                      (val) => (val && val.length > 0) || 'Senha Obrigatório',
                    ]"
                  />

                  <div class="q-gutter-sm">
                    <q-checkbox
                      v-model="usuario.rule"
                      val="ADMIN"
                      label="Administrador"
                      color="teal"
                    />
                    <q-checkbox
                      v-model="usuario.rule"
                      val="USUARIO"
                      label="Usuario"
                      color="teal"
                    />
                  </div>

                  <div>
                    <q-btn
                      label="Submit"
                      type="submit"
                      color="primary"
                      @click="salvarUsuario"
                    />
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                      @click="onReset"
                    />
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
