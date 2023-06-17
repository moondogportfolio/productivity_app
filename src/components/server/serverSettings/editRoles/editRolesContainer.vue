<template>
  <p class="text-h6">Edit Role</p>
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab name="display" label="Display" />
    <q-tab name="perms" label="Permissions" />
    <q-tab name="manage" label="Manage Members" />
  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="display">
      <edit-display></edit-display>
    </q-tab-panel>

    <q-tab-panel name="perms">
      <permission-bubble v-for="n in 10" :key="n"></permission-bubble>
    </q-tab-panel>

    <q-tab-panel name="manage">
      <div class="text-h6">Movies</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import EditDisplay from './editDisplay.vue';
import permissionBubble from './permissionBubble.vue';
export default {
  components: { permissionBubble, EditDisplay },
  data() {
    return {
      tab: 'mails',
    };
  },
};
</script>

<style></style>
