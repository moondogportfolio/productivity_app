<template>
  <div class="window-height column">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      active-bg-color="white"
      content-class="bg-grey-4"
      active-class="shadow-1 active-tab"
      align="justify"
      indicator-color="transparent"
      no-caps
    >
      <q-tab name="tab1" label="Friends" />
      <q-tab name="tab2" label="Guild" />
      <q-tab name="tab3" label="School" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated class="col-grow">
      <q-tab-panel name="tab1">
        <div class="row content-stretch full-height q-col-gutter-xs">
          <!-- <div class="col-4">
            <channel-container :isActive="true"></channel-container>
          </div> -->
          <div class="col-4" v-for="n in 4" :key="n">
            <channel-container :isActive="false"></channel-container>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="tab2">
        <div class="text-h6">Test</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="tab3">
        <div class="text-h6">Test</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import channelContainer from 'src/components/channel/containers/channelContainer.vue';
export default {
  components: { channelContainer },
  data() {
    return {
      tab: 'tab1',
    };
  },
};
</script>

<style></style>
