<template>
  <div class="input-menu softshadow-1 row q-ma-sm bg-white absolute-bottom">
    <command-component v-if="mode == 'command'" />
    <upload-component v-else-if="mode == 'upload'" />
    <command-component v-else />
  </div>
</template>

<script>
import commandComponent from '../inputMenu/commandComponent.vue';
import UploadComponent from '../inputMenu/uploadComponent.vue';
export default {
  components: { commandComponent, UploadComponent },
  data() {
    return {
      mode: 'command',
    };
  },
};
</script>

<style>
.input-menu {
  border-radius: 4px;
  margin-bottom: 12px;
}
</style>
