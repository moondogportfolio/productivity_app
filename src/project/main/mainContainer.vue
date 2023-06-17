<template>
  <div class="column full-height">
    <navbar-container />
    <div class="q-ma-md">
      <div class="text-h6">Mercury</div>
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="Components" icon="widgets" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>
    </div>
    <q-separator />
    <filt-container />

    <integrate-buttons v-if="false" />
    <automate-buttons v-if="false" />

    <q-separator />
    <q-scroll-area class="col-grow scroll-area" data-sticky-container>
      <q-tab-panels v-model="navbarTab" class="full-height">
        <q-tab-panel name="server" />
        <q-tab-panel name="project" />
        <q-tab-panel name="workspace" />
        <q-tab-panel name="jiratable">
          <view-jira-table-container />
        </q-tab-panel>
        <q-tab-panel name="maintable">
          <table-container />
        </q-tab-panel>
        <q-tab-panel name="kanban">
          <kanban-view />
        </q-tab-panel>
        <q-tab-panel name="settings">
          <column-settings-view />
        </q-tab-panel>
        <q-tab-panel name="notes">
          <view-notes-container />
        </q-tab-panel>
      </q-tab-panels>
    </q-scroll-area>
  </div>
</template>

<script>
import FiltContainer from '../filterBar/filterBarContainer.vue';
import AutomateButtons from '../automate/automateButtons.vue';
import IntegrateButtons from '../integrate/integrateButtons.vue';
import ColumnSettingsView from '../columnSettings/containers/columnSettingsView.vue';
import KanbanView from '../viewKanban/containers/kanbanView.vue';
import tableContainer from 'src/project/viewTable/containers/mainTable.vue';
import ViewJiraTableContainer from '../viewJiraTable/viewJiraTableContainer.vue';
import ViewNotesContainer from '../viewNotes/containers/viewNotesContainer.vue';
import { VisibleStore } from 'src/stores/peep-show';
import { storeToRefs } from 'pinia';
import NavbarContainer from '../navbar/navbarContainer.vue';
export default {
  setup() {
    const { navbarTab } = storeToRefs(VisibleStore);
    return {
      navbarTab,
    };
  },
  components: {
    tableContainer,
    KanbanView,
    IntegrateButtons,
    AutomateButtons,
    ColumnSettingsView,
    ViewJiraTableContainer,
    ViewNotesContainer,
    FiltContainer,
    NavbarContainer,
  },
};
</script>

<style></style>
