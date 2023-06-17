<template>
  <q-list dense style="font-size: 14px">
    <q-item>
      <q-item-section>Hank Hoafger</q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable @click="show_profile_modal">
      <q-item-section>Profile</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>Mention</q-item-section>
    </q-item>
    <q-separator></q-separator>
    <q-item clickable>
      <q-item-section>Message</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>Call</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>Add Note</q-item-section>
    </q-item>
    <q-separator></q-separator>
    <q-item clickable>
      <q-item-section>Mute</q-item-section>
      <q-item-section side="side">
        <q-checkbox v-model="ismuted"></q-checkbox>
      </q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>Change Nickname</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>Remove Friend</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>Block</q-item-section>
    </q-item>
    <q-separator></q-separator>
    <q-item clickable>
      <q-item-section class="text-red">Kick Jaja</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section class="text-red">Ban Jaja</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {};
</script>

<style></style>
