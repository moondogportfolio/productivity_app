<template>
  <div class="row">
    <div class="basic-box col">
      <notes-list-container />
    </div>
    <q-separator vertical spaced />
    <div class="col">
      <monday-dialog-container />
    </div>
  </div>
</template>

<script>
import MondayDialogContainer from 'src/project/viewKanban/containers/mondayDialogContainer.vue';
import notesListContainer from './notesListContainer.vue';

export default { components: { notesListContainer, MondayDialogContainer } };
</script>

<style></style>
