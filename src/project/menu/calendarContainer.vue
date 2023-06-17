<template>
  <div>
    <q-date v-model="value" today-btn mask="YYYY-MM-DD">
      <q-btn @click="validate">Set date</q-btn>
    </q-date>
  </div>
</template>

<script>
import { date } from 'quasar';
const { formatDate } = date;
export default {
  setup() {
    const now = formatDate(Date.now(), 'YYYY-MM-DD');
    return {
      value: now,
    };
  },
};
</script>

<style></style>
