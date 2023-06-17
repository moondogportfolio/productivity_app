<template>
  <div class="bg-grey-4 column items-center q-pt-md" style="width: 56px">
    <q-avatar
      class="bg-white q-mb-md"
      rounded
      size="32px"
      font-size="28px"
      v-for="n in 3"
      :key="n"
    >
      <q-icon name="explore" class="col"></q-icon>
    </q-avatar>
  </div>
  <div class="col q-pa-sm">
    <q-list>
      <q-item clickable v-for="n in 5" :key="n">
        <q-item-section>
          <q-item-label class="text-weight-medium">
            /command
            <q-badge class="q-ml-sm" color="grey">query</q-badge>
          </q-item-label>
          <q-item-label class="tiny-caption">description</q-item-label>
        </q-item-section>
        <q-item-section side="side">
          <q-item-label class="tiny-caption">Application Test</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
