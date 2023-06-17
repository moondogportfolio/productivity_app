<template>
  <q-toolbar class="q-gutter-x-sm">
    <new-button />
    <new-column-button />
    <search-button />
    <filter-button />
    <sort-button />
    <q-space />
    <!-- <fullscreen-button /> -->
    <settings-button />
  </q-toolbar>
</template>
<script>
import FilterButton from './filterButton.vue';
import NewButton from './newButton.vue';
import searchButton from './searchButton.vue';
import SettingsButton from '../viewKanban/settingsButton.vue';
import SortButton from './sortButton.vue';
// import FullscreenButton from './fullscreenButton.vue';
import NewColumnButton from './newColumnButton.vue';
export default {
  components: {
    searchButton,
    FilterButton,
    NewButton,
    SettingsButton,
    SortButton,
    // FullscreenButton,
    NewColumnButton,
  },
};
</script>

<style></style>
