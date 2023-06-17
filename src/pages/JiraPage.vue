<template>
  <primary-layout>
    <main-container />
  </primary-layout>
</template>

<script>
import MainContainer from 'src/project/main/mainContainer.vue';
import { ref } from 'vue';
import PrimaryLayout from 'src/layouts/primaryLayout.vue';
export default {
  components: { MainContainer, PrimaryLayout },
};
</script>

<style></style>
