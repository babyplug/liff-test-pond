<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";

import { inject, onBeforeMount } from "vue";

const liff = inject("$liff");

onBeforeMount(async () => {
  await liff?.init({ liffId: "1657010387-J6N08WqO" });
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
