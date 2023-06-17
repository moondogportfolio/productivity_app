<template>
  <q-list class="col q-pa-md" dense>
    <q-item class="q-mb-sm">
      <q-item-section avatar>
        <q-item-label> Description fields </q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-btn icon="info" flat dense color="black" />
      </q-item-section>
    </q-item>
    <q-item v-for="n in 5" :key="n" class="shadow-jira q-mb-sm">
      <q-item-section avatar>
        <q-avatar icon="label" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Summary</q-item-label>
      </q-item-section>
    </q-item>
    <q-item class="q-mb-sm">
      <q-item-section avatar>
        <q-item-label> Context fields </q-item-label>
      </q-item-section>
      <q-item-section avatar>
        <q-btn icon="info" flat dense color="black" />
      </q-item-section>
    </q-item>
    <q-expansion-item
      group="field"
      icon="label"
      label="Summary"
      class="shadow-jira q-mb-sm"
      clickable
    >
      <q-card>
        <q-card-section> Item here </q-card-section>
        <q-card-section> Item here </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      group="field"
      icon="label"
      label="Summary"
      class="shadow-jira q-mb-sm"
      clickable
    >
      <q-card>
        <q-card-section> Item here </q-card-section>
        <q-card-section> Item here </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-item>
      <q-item-section>
        <q-separator />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-center">HIDE WHEN EMPTY</q-item-label>
      </q-item-section>
      <q-item-section>
        <q-separator />
      </q-item-section>
    </q-item>
    <q-item class="shadow-jira q-mb-sm">
      <q-item-section avatar>
        <q-avatar icon="label" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Summary</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {};
</script>

<style></style>
