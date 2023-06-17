<template>
  <div
    class="column q-pa-md q-my-md"
    :class="[{ softshadow: value }, value ? 'text-black' : 'text-grey-5']"
  >
    <div class="row items-center">
      <span class="text-subtitle2">View channels</span>
      <q-space></q-space>
      <q-toggle v-model="value" />
    </div>
    <div>Allows members to view channels by default.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style></style>
