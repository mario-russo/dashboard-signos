<script setup lang="ts">
import { onMounted, ref } from "vue";
import { verify } from "../service/authService";

const token = ref('');

async function verifica() {
  const result = await verify();
  return result.data;
}

onMounted(async () => {
  token.value = await verifica();
});
</script>
<template>
  <div>
    <h3>
      {{ token }}
    </h3>
    <h1>ola mundo</h1>
  </div>
</template>

<style scoped></style>
