<template>
  <q-btn
    icon="settings"
    flat
    @click="kanbanSettingsVisible = !kanbanSettingsVisible"
  ></q-btn>
</template>

<script>
import { kanbanSettingsVisible } from './containers/kanbanSettingsContainer.vue';
export default {
  setup() {
    return {
      kanbanSettingsVisible,
    };
  },
};
</script>

<style></style>
