<template>
  <div style="height: 160px" class="row">
    <q-scroll-area class="full-height column col-2 items-center">
      <q-list dense>
        <q-item
          clickable
          v-for="n in 10"
          :key="n"
          @click="scroll_to_reference(n)"
        >
          <q-item-section>
            <q-item-label size="12px" flat :index="n" lines="1"
              >{{ n }} asdasdasdasd asjd kalsj jaskl jsas</q-item-label
            ></q-item-section
          >
        </q-item>
      </q-list>
    </q-scroll-area>

</template>

<script>
export default {
  methods: {
    scroll_to_reference(index) {
      console.log(index);
      let ele = document.querySelector(`#post-${index}`);
      console.log(ele);
      this.$refs.scrollArea.setScrollPosition('vertical', ele.offsetTop, 200);
      // if (this.$refs.scrollArea.getScrollPosition().top > ele.offsetTop) {
      // }
    },
  },
};
</script>

<style>
.pinned-message {
  border: 1px solid lightgray;
  border-radius: 8px;
}
</style>
