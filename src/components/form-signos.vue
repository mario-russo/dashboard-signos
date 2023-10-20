<script setup lang="ts">
import { ref, reactive } from "vue";
const tab = ref("aries");
const signosDoZodiaco = [
  "Áries",
  "Touro",
  "Gêmeos",
  "Câncer",
  "Leão",
  "Virgem",
  "Libra",
  "Escorpião",
  "Sagitário",
  "Capricórnio",
  "Aquário",
  "Peixes",
];
const paragrafos = [
  "Primeiro Paragrafo",
  "Segundo Paragrafo",
  "Terceiro Paragrafo",
  "Quarto Paragrafo",
];

</script>
<template>
    <div>
        <q-card>
            <div>
              <q-tab-panels
                v-model="tab"
                v-for="signo in signosDoZodiaco"
                :key="signo"
              >
                <q-tab-panel :name="signo" animated>
                  <div class="text-h5 text-center">{{ signo }}</div>
                  <div class="mt-3" v-for="paragrafo in paragrafos" :key="paragrafo">
                    <div class="text-h6">{{ paragrafo }}</div>
                    <q-input v-model="textareaModel" hint="" filled autogrow label="">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          {{ paragrafo }}
                        </div>
                      </template>
                    </q-input>
                  </div>
                </q-tab-panel>
              </q-tab-panels>
            </div>
            <q-tabs v-model="tab" class="fixed-bottom bg-primary text-white">
              <q-tab
                v-for="signo in signosDoZodiaco"
                :v-model="signo"
                :key="signo"
                :name="signo"
                :label="signo"
              />
            </q-tabs>
          </q-card>
    </div>
</template>


<style scoped>

</style>