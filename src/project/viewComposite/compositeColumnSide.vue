<template>
  <div class="row full-height">
    <div class="col bg-white">
      <monday-dialog-container />
    </div>
    <q-separator vertical color="grey-4" />
    <div class="col bg-white">
      <side-menu-container />
    </div>
  </div>
</template>

<script>
import sideMenuContainer from '../sideMenu/sideMenuContainer.vue';
import MondayDialogContainer from '../viewKanban/containers/mondayDialogContainer.vue';

export default {
  components: { sideMenuContainer, MondayDialogContainer },
};
</script>

<style></style>
