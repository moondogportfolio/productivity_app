<template>
  <q-avatar
    @click="$router.push('/home')"
    class="cursor-pointer bg-white soft-shadow border-soft"
    size="lg"
    icon="chat"
  >
    <q-img src="src/assets/1.png" img-class="home" v-if="false"></q-img>
  </q-avatar>
</template>

<script>
export default {};
</script>

<style>
.home {
  filter: invert(1);
}
</style>
