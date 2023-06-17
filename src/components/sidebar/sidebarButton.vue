<template>
  <div>
    <q-avatar class="cursor-pointer bg-grey-5 border-soft" size="lg">
      {{ content }}
      <!-- <q-img :src="`src/assets/${index}.png`" v-if="false"></q-img> -->
    </q-avatar>
  </div>
</template>

<script>
export default {
  props: ['location', 'content'],
};
</script>

<style></style>
