<template>
  <div class="q-pa-sm">
    <q-btn icon="add" round class="bg-white" />
  </div>
  <q-separator />
  <q-tabs
    v-model="serverPanel"
    dense
    class="text-grey-7 bg-grey-3"
    active-bg-color="white"
    indicator-color="black"
    narrow-indicator
    align="left"
    active-class="active-tab soft-shadow"
    inline-label
  >
    <q-tab name="member" label="Member" />
    <q-tab name="channel" label="Channel" />
  </q-tabs>
</template>

<script>
export default {
  data() {
    return {
      serverPanel: 'member',
    };
  },
};
</script>

<style></style>
