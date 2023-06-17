<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-item-label>Kanban Column</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="info">
          <q-tooltip>Group items with same status together.</q-tooltip>
        </q-icon>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-select dense />
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Kanban Column</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="info">
          <q-tooltip>Choose columns to file at top.</q-tooltip>
        </q-icon>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>Card Columns</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon name="info">
          <q-tooltip>Choose columns to display on each card.</q-tooltip>
        </q-icon>
      </q-item-section>
    </q-item>
    <q-item v-for="n in 10" :key="n">
      <q-item-section avatar>
        <q-checkbox />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ n }}</q-item-label></q-item-section
      >
      <q-item-section side>
        <q-icon name="deblur" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {};
</script>

<style></style>
