<template>
  <settings-header>
    <template #title> Server Members </template>
  </settings-header>

  <q-input standout dense placeholder="Search username" v-model="search">
    <template #append>
      <q-icon name="search"></q-icon>
    </template>
  </q-input>
  <q-table :columns="columns" :rows="invites">
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="user" :props="props" auto-width>
          <user-details v-bind="props.row.user"></user-details>
        </q-td>
        <q-td key="role" :props="props">
          <role-badge v-bind="props.row.role"></role-badge>
          <q-btn icon="add"></q-btn>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import RoleBadge from '../role/roleBadge.vue';
import UserDetails from '../user/userDetails.vue';
import settingsHeader from './settingsHeader.vue';
import { ref } from 'vue';
const columns = [
  { name: 'user', align: 'center', label: 'User', field: 'user' },
  { name: 'role', align: 'center', label: 'Role', field: 'role' },
];
const invites = [
  {
    user: { discriminator: '1234', username: 'jaja', nick: 'JAJA' },
    role: { color: 'red', icon: 'explore', name: 'new role' },
  },

  {
    user: { discriminator: '2341', username: 'QWE', nick: 'aab' },
    role: { color: 'black', icon: 'edit', name: 'LIOM' },
  },
];

export default {
  components: { settingsHeader, RoleBadge, UserDetails },
  setup() {
    const search = ref('');
    return {
      search,
      columns,
      invites,
    };
  },
};
</script>

<style></style>
