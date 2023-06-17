<template>
  <div class="emoticon-container rborder shadow-1 column">
    <div
      class="col-shrink full-width"
      style="border-bottom: 1px solid lightgray"
    >
      <q-tabs
        class="text-grey"
        v-model="emoticon_category"
        dense="dense"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator="narrow-indicator"
      >
        <q-tab name="gif" label="GIFs"></q-tab>
        <q-tab name="sticker" label="Stickers"></q-tab>
        <q-tab name="emoji" label="Emoji"></q-tab>
      </q-tabs>
      <q-input
        class="q-ma-sm"
        outlined="outlined"
        dense="dense"
        v-model="emoticon_search"
      >
        <template v-slot:append>
          <q-icon name="add_box"></q-icon>
        </template>
      </q-input>
    </div>
    <div class="row col fit">
      <div class="col-shrink" style="background: #e3e5e8; overflow: hidden">
        <div
          v-for="folder in 5"
          :key="folder"
          @click="scroll_into_view(folder)"
          style="margin: 8px"
        >
          <q-avatar
            icon="close"
            color="black"
            text-color="white"
            size="32px"
          ></q-avatar>
        </div>
      </div>
      <div class="col column fit">
        <div
          class="col"
          style="
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            overflow-x: hidden;
            background: #f2f3f5;
          "
        >
          <div v-for="server in 5" :key="server">
            <div class="row">
              <div v-for="emoji in 40" :key="emoji">
                <p>{{ server }}</p>
                <div class="cursor-pointer icon" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-shrink q-pa-sm" style="background: #ebedef">
          <div></div>
          <div>
            <div class="text-bold">selected emoticon</div>
            <div class="text-caption">from group</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emoticon_category: 'emoji',
    };
  },
};
</script>

<style>
.icon {
  height: 32px;
  width: 32px;
  margin: 4px;
  background: black;
}

.emoticon-container {
  height: 50vh;
  width: 40vw;
  border-radius: 5px;
}
</style>
