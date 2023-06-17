<template>
  <div class="row window-height">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey col-3 bg-grey-2"
      active-color="primary"
      indicator-color="primary"
      vertical
      align="justify"
    >
      <q-tab name="roles" label="Roles" />
      <q-tab name="members" label="Members" />
      <q-tab name="invites" label="Invites" />
      <q-tab name="bans" label="Bans" />
      <q-tab name="delete" label="Delete server" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated vertical class="col">
      <q-tab-panel name="roles">
        <roles-view></roles-view>
      </q-tab-panel>
      <q-tab-panel name="members">
        <members-view></members-view>
      </q-tab-panel>
      <q-tab-panel name="invites">
        <invites-view></invites-view>
      </q-tab-panel>
    </q-tab-panels>
    <div class="col-1" style="margin-top: 50px">
      <q-btn icon="close" round @click="hide"></q-btn>
    </div>
  </div>
</template>

<script>
import { VisibleStore } from 'src/stores/peep-show';
import invitesView from './invitesView.vue';
import MembersView from './membersView.vue';
import RolesView from './rolesView.vue';

export default {
  components: { invitesView, MembersView, RolesView },
  methods: {
    hide() {
      VisibleStore.viewSettings = false;
    },
  },
  data() {
    return {
      tab: 'mails',
    };
  },
};
</script>

<style></style>
