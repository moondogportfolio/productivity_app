<template>
  <div class="column q-gutter-y-md">
    <q-input standout dense placeholder="Role name"></q-input>
    <q-separator />
    <div class="row">
      <div class="col-3 column q-mr-md cursor-pointer q-gutter-y-md">
        <div>Role color</div>
        <div
          class="bg-yellow rounded-borders"
          style="height: 80px; width: 100%"
        ></div>
        <div>Role icon</div>
        <div
          class="bg-grey-4 rounded-borders column"
          style="
            height: 80px;
            min-width: 80px;
            justify-content: center;
            align-items: center;
          "
        >
          <q-tooltip
            ><div style="max-width: 200px">
              "Upload an image under 256 KB or pick a custom emoji from this
              server. We recommend at least 64x64 pixels. Members will see the
              icon for their highest role if they have multiple roles."
            </div></q-tooltip
          >
          <q-icon name="image" size="32px"></q-icon>
        </div>
      </div>
      <q-separator vertical />
      <div class="col q-px-md q-gutter-y-md">
        <div>Preview</div>
        <role-preview></role-preview>
        <role-preview></role-preview>
      </div>
    </div>
    <q-separator />
    <div class="row items-center">
      <span>Display role members separately.</span>
      <q-space></q-space>
      <q-toggle v-model="value" />
    </div>
    <q-separator />
    <div class="row items-center">
      <span>Allow anyone to mention this role.</span>
      <q-space></q-space>
      <q-toggle v-model="value" />
    </div>
  </div>
</template>

<script>
import rolePreview from './rolePreview.vue';
export default {
  components: { rolePreview },
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style></style>
