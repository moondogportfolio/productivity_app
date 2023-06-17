<template>
  <div class="row fit">
    <sidebar-container class="col-shrink" />
    <div class="col">
      <slot />
    </div>
  </div>
</template>

<script>
import sidebarContainer from 'src/components/sidebar/sidebarContainer.vue';
export default {
  components: { sidebarContainer },
};
</script>

<style></style>
