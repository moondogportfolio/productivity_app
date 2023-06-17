<template>
  <div class="column q-gutter-y-sm">
    <work-header />
    <work-list />
  </div>
  <q-dialog v-model="dialog" full-width>
    <composite-column-side />
  </q-dialog>
</template>

<script>
import WorkList from '../workList.vue';
import WorkHeader from '../workHeader.vue';
import CompositeColumnSide from 'src/project/viewComposite/compositeColumnSide.vue';
export default {
  components: { WorkList, WorkHeader, CompositeColumnSide },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
