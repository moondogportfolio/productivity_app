<template>
  <template v-if="editRole">
    <roles-edit-view @close="editRole = false"></roles-edit-view>
  </template>
  <template v-else>
    <settings-header>
      <template #title> Roles </template>
      <template #description>
        Use roles to group your server members and assign permissions.
      </template>
    </settings-header>
    <div class="q-gutter-y-md q-mt-md">
      <div class="row q-gutter-x-md">
        <q-input
          class="col-grow"
          placeholder="Search roles"
          v-model="search"
          standout
          dense
        ></q-input>
        <q-btn label="Create role"></q-btn>
      </div>
      <q-table :columns="columns" :rows="roles" :hide-bottom="true"> </q-table>
    </div>
  </template>
</template>

<script>
import RolesEditView from './rolesEditView.vue';
import SettingsHeader from './settingsHeader.vue';
export default {
  components: { SettingsHeader, RolesEditView },
  setup() {
    const columns = [
      { name: 'name', align: 'left', label: 'Roles', field: 'name' },
      { name: 'members', align: 'center', label: 'Members', field: 'members' },
    ];
    const roles = [
      {
        name: 'new role',
        members: 1,
      },
      {
        name: 'asdasdsa role',
        members: 222,
      },
    ];
    return {
      roles,
      columns,
    };
  },
  data() {
    return {
      search: '',
      editRole: false,
    };
  },
};
</script>

<style></style>
