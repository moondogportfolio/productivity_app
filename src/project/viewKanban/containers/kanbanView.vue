<template>
  <boards-container />
  <kanban-settings-container class="absolute-right" />
</template>

<script>
import boardsContainer from 'src/project/viewKanban/containers/boardsContainer.vue';
import KanbanSettingsContainer from 'src/project/viewKanban/containers/kanbanSettingsContainer.vue';
export default {
  components: { boardsContainer, KanbanSettingsContainer },
};
</script>

<style></style>
