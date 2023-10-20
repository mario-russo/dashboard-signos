<script setup lang="ts">
import { ref } from "vue";
const tab = ref("aries");
const textareaModel = ref(
  "A busca constante pelo conhecimento é uma jornada enriquecedora. Aprender é a chave para o crescimento pessoal e profissional. A cada dia, novas oportunidades se abrem quando nos dedicamos ao aprendizado e à expansão de nossas habilidades. O mundo é um livro, e quem não viaja, lê apenas uma página. Portanto, vamos explorar, questionar e absorver todo o conhecimento que estiver ao nosso alcance, pois é a educação que nos capacita a enfrentar desafios e a construir um futuro melhor."
);
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
      <div >
        <q-tab-panels v-model="tab" v-for="signo in signosDoZodiaco" :key="signo">
          <q-tab-panel  :name="signo" animated>
            <div class="text-h5 text-center">{{ signo }}</div>
            <div class="mt-3" v-for="paragrafo in paragrafos" :key="paragrafo">
              <div class="text-h6">{{paragrafo}}</div>
              <q-input v-model="textareaModel"  hint="" filled autogrow label="">
                <template v-slot:label>
                  <div class="row items-center all-pointer-events">
                    {{paragrafo}}
                  </div>
                </template>
              </q-input>
            </div>
            <!-- <div class="mt-3">
              <div class="text-h6">Segundo Paragrafo</div>
              <q-input v-model="textareaModel" hint="" filled autogrow label="">
                <template v-slot:label>
                  <div class="row items-center all-pointer-events">
                    Segundo Paragrafo
                  </div>
                </template>
              </q-input>
            </div>
            <div class="mt-3">
              <div class="text-h6">Tercerio Paragrafo</div>
              <q-input v-model="textareaModel" hint="" autogrow label="">
                <template v-slot:label>
                  <div class="row items-center all-pointer-events">
                    Tercerio Paragrafo
                  </div>
                </template>
              </q-input>
            </div>
            <div class="mt-3">
              <div class="text-h6">Quarto Paragrafo</div>
              <q-input v-model="textareaModel" hint="" filled autogrow label="">
                <template v-slot:label>
                  <div class="row items-center all-pointer-events">
                    Quarto Paragrafo
                  </div>
                </template>
              </q-input>
            </div> -->
          </q-tab-panel>

          <!-- <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          
          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel> -->
        </q-tab-panels>
      </div>
      <q-tabs v-model="tab" class="text-teal" active-color="primary">
        <q-tab
        v-for="signo in signosDoZodiaco" :v-model="signo"
          :key="signo"
          :name="signo"
          :label="signo"
        />
      </q-tabs>
    </q-card>
  </div>
</template>

<style scoped></style>
