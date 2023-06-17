<template>
  <q-table
    class="my-sticky-header-column-table softshadow"
    title="Treats"
    :rows="realRows"
    :columns="realColumns"
    row-key="name"
    separator="vertical"
  >
    <template v-slot:body-cell-name="props">
      <q-td @click="toggleViewSidebar">
        {{ props.value.value }}
      </q-td>
    </template>
    <template v-slot:body-cell="props">
      <q-td class="cursor-pointer">
        <div style="white-space: break-spaces">
          {{ props.value?.value }}
        </div>
        <q-menu anchor="bottom middle" self="top middle">
          <component :is="componentsMap[props.col.type]" />
        </q-menu>
      </q-td>
    </template>
    <template v-slot:bottom-row>
      <q-tr>
        <q-td colspan="100%"> Bottom row </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script>
import calendarContainer from '../menu/calendarContainer.vue';
import ColorContainer from '../menu/colorContainer.vue';
import TextContainer from '../menu/textContainer.vue';

import tableStatusMenu from '../menu/tableStatusMenu.vue';
import tablePeopleMenu from '../menu/tablePeopleMenu.vue';
import { CounterStore } from 'src/stores/example-store';
import { storeToRefs } from 'pinia';
import { VisibleStore } from 'src/stores/peep-show';

const componentsMap = {
  calendar: calendarContainer,
  color: ColorContainer,
  text: TextContainer,
  status: tableStatusMenu,
  people: tablePeopleMenu,
};

export default {
  setup() {
    const { realColumns, realRows } = storeToRefs(CounterStore);
    return {
      realColumns,
      realRows,
      componentsMap,
      toggleViewSidebar: () => {
        VisibleStore.viewSidebar = !VisibleStore.viewSidebar;
      },
    };
  },
};
</script>

<style lang="sass">
.my-sticky-header-column-table
  height: 500px

  /* height or max-height is important */

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #c1f4cd !important

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #fff

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>
