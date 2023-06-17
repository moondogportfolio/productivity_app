<template>
  <settings-header>
    <template #title> Invites </template>
    <template #description>
      Here's a list of all active invite links. You can revoke any one.
    </template>
  </settings-header>
  <q-table :columns="columns" :rows="invites" class="q-ma-sm"></q-table>
</template>

<script>
import settingsHeader from './settingsHeader.vue';
const columns = [
  { name: 'inviter', align: 'center', label: 'Inviter', field: 'inviter' },
  {
    name: 'invite_code',
    align: 'center',
    label: 'Invite Code',
    field: 'invite_code',
  },
  { name: 'uses', label: 'Uses', field: 'uses' },
  { name: 'expires_at', label: 'Expiry', field: 'expires_at' },
];
const invites = [
  {
    inviter: 'jaja',
    invite_code: '123fASD',
    uses: '11/200',
    expires_at: '12:00:00',
  },

  {
    inviter: 'jaja',
    invite_code: '123fASD',
    uses: '11/200',
    expires_at: '12:00:00',
  },
];

export default {
  components: { settingsHeader },
  setup() {
    return {
      columns,
      invites,
    };
  },
};
</script>

<style></style>
