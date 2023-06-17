<template>
  <q-dialog v-model="createChannelDialog">
    <create-channel-dialog></create-channel-dialog>
  </q-dialog>
  <header-options></header-options>
  <q-separator></q-separator>
  <div class="full-width">
    <q-expansion-item
      label="Direct Message"
      dense
      default-opened
      header-class="text-grey-8 expand bg-white"
    >
      <q-list>
        <q-item
          v-for="n in 5"
          :key="n"
          dense
          clickable
          class="q-ma-xs basic-box"
          active-class="bg-white"
        >
          <chat-item></chat-item>
        </q-item>
      </q-list>
    </q-expansion-item>
    <q-expansion-item
      label="Gamer People"
      dense
      default-opened
      header-class="text-grey-8 expand bg-white"
    />
    <q-expansion-item
      label="Gamer People"
      dense
      default-opened
      header-class="text-grey-8 expand bg-white"
    />
  </div>
</template>

<script>
import CreateChannelDialog from './createChannelDialog.vue';
import chatItem from '../chatlist/chatItem.vue';
import HeaderOptions from '../headerOptions.vue';
export default {
  components: { chatItem, CreateChannelDialog, HeaderOptions },
  data() {
    return {
      createChannelDialog: false,
    };
  },
};
</script>

<style>
.expand {
  border-bottom: 1px solid lightgrey;
}
</style>
