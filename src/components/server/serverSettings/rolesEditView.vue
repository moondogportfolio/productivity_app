<template>
  <div class="row fit">
    <div class="col-3">
      <q-list>
        <back-button @close="$emit('close')"></back-button>
        <q-item v-for="n in 5" :key="n">
          <q-item-section>
            <role-badge
              :color="`red`"
              :icon="`explore`"
              :name="`aw`"
            ></role-badge>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator vertical />
    <div class="col q-mx-md">
      <edit-roles-container></edit-roles-container>
    </div>
  </div>
</template>

<script>
import RoleBadge from '../role/roleBadge.vue';
import BackButton from './editRoles/backButton.vue';
import editRolesContainer from './editRoles/editRolesContainer.vue';
export default {
  emits: ['close'],
  components: { editRolesContainer, RoleBadge, BackButton },
};
</script>

<style></style>
