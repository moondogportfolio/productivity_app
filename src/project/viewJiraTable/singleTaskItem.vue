<template>
  <q-item clickable dense class="bg-white">
    <q-item-section avatar>
      <q-avatar icon="bookmark" />
    </q-item-section>
    <q-item-section avatar>
      <q-item-label class="text-caps text-grey-6">Text-1</q-item-label>
    </q-item-section>
    <q-item-section>
      <q-item-label>asd</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-select :options="['Todo', 2, 3]" dense></q-select>
    </q-item-section>
    <q-item-section side>
      <q-icon name="person" />
    </q-item-section>
    <q-item-section side>
      <q-btn icon="more_horiz" flat />
    </q-item-section>
  </q-item>
</template>

<script>
export default {};
</script>

<style></style>
