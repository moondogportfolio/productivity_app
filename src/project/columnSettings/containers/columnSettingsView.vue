<template>
  <div class="window-height row">
    <column-setting-main-cont />
    <q-separator vertical />
    <field-list-container style="width: 400px" />
  </div>
</template>

<script>
import columnSettingMainCont from './columnSettingMainCont.vue';
import FieldListContainer from './fieldListContainer.vue';

export default {
  components: { columnSettingMainCont, FieldListContainer },
};
</script>

<style>
.shadow-jira {
  box-shadow: rgb(9 30 66 / 25%) 0px 1px 1px, rgb(9 30 66 / 31%) 0px 0px 2px;
  border-radius: 1px;
}
</style>
