<template>
  <div
    class="bg-white softshadow"
    style="width: 250px"
    v-if="kanbanSettingsVisible"
  >
    <kanban-settings />
  </div>
</template>

<script>
import kanbanSettings from '../../viewKanban/kanbanSettings.vue';
import { ref } from 'vue';
export const kanbanSettingsVisible = ref(false);
export default {
  setup() {
    return {
      kanbanSettingsVisible,
    };
  },
  components: { kanbanSettings },
};
</script>

<style></style>
