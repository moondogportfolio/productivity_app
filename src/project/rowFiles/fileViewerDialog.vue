<template>
  <q-card style="border-radius: 10px">
    <q-card-section>
      <div class="q-gutter-x-sm">
        <q-btn icon="label" v-for="n in 6" :key="n" flat />
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section horizontal>
      <q-card-section class="col-8 row items-center">
        <div>
          <q-btn icon="label" />
        </div>
        <div class="col column items-center">
          <q-img src="src/assets/1.png" width="300px" class="col"></q-img>
          <q-toolbar class="bg-black" />
        </div>
        <q-btn icon="label" />
      </q-card-section>
      <q-separator vertical />

      <div class="col">
        <q-tab-panels v-model="tab">
          <q-tab-panel name="updates"> </q-tab-panel>
          <q-tab-panel name="gallery"></q-tab-panel>
          <q-tab-panel name="info">
            <div>
              <q-item v-for="n in 5" :key="n">
                <q-item-section>
                  <q-item-label>File size</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label>32px</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <q-separator vertical />
      <q-tabs vertical no-caps v-model="tab">
        <q-tab name="updates" label="Updates" />
        <q-tab name="gallery" label="Gallery" />
        <q-tab name="info" label="Info" />
      </q-tabs>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      tab: 'updates',
    };
  },
};
</script>

<style></style>
