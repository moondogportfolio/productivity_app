<template>
  <div class="q-pa-lg column full-height">
    <div class="text-h6">New Row</div>
    <div>in → New Board</div>
    <q-scroll-area class="col-grow">
      <q-list>
        <q-item v-for="n in 20" :key="n">
          <q-item-section avatar>
            <q-avatar icon="label" />
          </q-item-section>
          <q-item-section style="max-width: 100px">
            <q-item-label lines="1">Group asdasda asd </q-item-label>
          </q-item-section>
          <q-item-section class="bg-grey-4">
            <q-item-label></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
