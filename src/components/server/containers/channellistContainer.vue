<template>
  <q-scroll-area class="full-height">
    <q-expansion-item
      label="direct-message"
      dense
      default-opened
      header-class="text-grey-8 expand bg-white text-uppercase"
    >
      <q-list class="q-mr-sm">
        <q-item
          v-for="n in 6"
          :key="n"
          clickable
          dense
          class="q-mx-xs"
          active-class="bg-white"
        >
          <channel-item />
        </q-item>
      </q-list>
    </q-expansion-item>
  </q-scroll-area>
</template>

<script>
import ChannelItem from '../channelPanel/channelItem.vue';
export default {
  components: { ChannelItem },
};
</script>

<style>
.q-scrollarea__content {
  max-width: 100% !important;
}
</style>
