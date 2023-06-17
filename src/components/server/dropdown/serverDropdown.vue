<template>
  <q-btn-dropdown
    :ripple="false"
    flat
    label="Graph QL"
    :menu-offset="[0, 5]"
    content-class="shadow-fb q-pa-none"
  >
    <q-list dense>
      <invite-button></invite-button>
      <server-settings-button></server-settings-button>
      <q-separator />
      <edit-profile-button></edit-profile-button>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
import EditProfileButton from './editProfileButton.vue';
import InviteButton from './inviteButton.vue';
import ServerSettingsButton from './serverSettingsButton.vue';
export default {
  components: {
    InviteButton,
    EditProfileButton,
    ServerSettingsButton,
  },
};
</script>

<style></style>
