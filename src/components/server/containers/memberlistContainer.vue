<template>
  <q-scroll-area class="full-height">
    <q-expansion-item
      label="Direct Message"
      dense
      default-opened
      header-class="bg-white"
    >
      <q-separator />
      <q-list>
        <q-item clickable>
          <member-item :index="1" />
          <q-tooltip><member-details /></q-tooltip>
        </q-item>
        <!-- <member-details /> -->
        <q-item
          v-for="n in 40"
          :key="n"
          clickable
          class="q-ma-xs"
          active-class="bg-white"
        >
          <member-item :index="n" />
        </q-item>
      </q-list>
    </q-expansion-item>
    <q-separator />
  </q-scroll-area>
</template>

<script>
import MemberDetails from '../memberPanel/memberDetails.vue';
import memberItem from '../memberPanel/memberItem.vue';
export default {
  components: { memberItem, MemberDetails },
};
</script>

<style></style>
