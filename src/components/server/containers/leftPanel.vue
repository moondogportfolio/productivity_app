<template>
  <server-dropdown></server-dropdown>
  <q-separator></q-separator>
  <q-input label="Filter messages." borderless dense v-model="filter">
    <template #prepend>
      <q-icon name="filter_alt" dense></q-icon>
    </template>
  </q-input>
  <q-separator></q-separator>
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
  <q-separator></q-separator>
  <q-tab-panels v-model="serverPanel" class="col-grow bg-grey-2">
    <q-tab-panel name="member" class="q-pa-none">
      <memberlist-container></memberlist-container>
    </q-tab-panel>
    <q-tab-panel name="channel" class="q-pa-none">
      <channellist-container></channellist-container>
    </q-tab-panel>
    <q-tab-panel name="dummy" class="q-pa-none">
      <div>aw</div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import serverDropdown from '../dropdown/serverDropdown.vue';
import ChannellistContainer from './channellistContainer.vue';
import MemberlistContainer from './memberlistContainer.vue';
export default {
  components: {
    serverDropdown,
    MemberlistContainer,
    ChannellistContainer,
  },
  data() {
    return {
      serverPanel: 'member',
      filter: '',
    };
  },
};
</script>

<style></style>
