<template>
  <primary-layout>
    <div class="full-height column">
      <div class="bg-grey-3">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey bg-grey-3 q-ml-md"
          active-bg-color="white"
          indicator-color="primary"
          align="left"
          shrink
          active-class="active-tab soft-shadow"
        >
          <q-tab name="work" label="Tasks" :ripple="false"></q-tab>
          <q-tab name="calendar" label="Calendar" :ripple="false"></q-tab>
          <q-tab name="projects" label="Projects" :ripple="false"></q-tab>
        </q-tabs>
      </div>
      <q-separator />
      <q-tab-panels v-model="tab" class="col-grow">
        <q-tab-panel name="work">
          <work-container />
        </q-tab-panel>
        <q-tab-panel name="calendar" />
        <q-tab-panel name="projects">
          <project-container />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </primary-layout>
</template>

<script>
import WorkContainer from 'src/profile/viewTasks/containers/workContainer.vue';
import PrimaryLayout from 'src/layouts/primaryLayout.vue';
import ProjectContainer from 'src/profile/projects/containers/projectContainer.vue';
export default {
  components: { WorkContainer, PrimaryLayout, ProjectContainer },
  data() {
    return {
      tab: 'work',
    };
  },
};
</script>

<style></style>
