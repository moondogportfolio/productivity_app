<template>
  <div class="q-pa-md">
    <field-list-group :fields="fields" group="Regular" />
    <field-list-group :fields="power" group="Power" />
  </div>
</template>

<script>
import fieldListGroup from '../fieldListGroup.vue';
const fields = {
  status: {
    label: 'Status',
    description: 'Get an instant overview of where things stand.',
    icon: 'view_week',
  },
  people: {
    label: 'People',
    description: 'Assign people to improve team work.',
    icon: 'person',
  },
  numbers: {
    label: 'Numbers',
    description: 'Add revenue, costs, time estimations and more.',
    icon: 'pin',
  },
  calendar: {
    label: 'Date',
    description: 'Add dates like deadlines to ensure you never drop the ball.',
    icon: 'event_note',
  },
  checkbox: {
    label: 'Checkbox',
    description: "Check off items and see what's done at a glance.",
    icon: 'check_box',
  },
  tags: {
    label: 'Tags',
    description: 'Add tags to categorize items across multiple boards.',
    icon: 'tag',
  },
  rating: {
    label: 'Rating',
    description: 'Rate or rank anything.',
    icon: 'star',
  },
  color: {
    label: 'Color',
    description: 'Color',
    icon: 'format_paint',
  },
  text: {
    label: 'Text',
    description: 'Text',
    icon: 'abc',
  },
};
const power = {
  button: {
    label: 'Button',
    description: 'Perform actions on items by clicking a button.',
    icon: 'smart_button',
  },
  dependency: {
    label: 'Dependency',
    description: 'Set up dependencies between items in the board.',
    icon: 'account_tree',
  },
  rating: {
    label: 'Dropdown',
    description: 'Create a dropdown list of options.',
    icon: 'format_list_numbered',
  },
};
export default {
  components: { fieldListGroup },
  setup() {
    return {
      fields,
      power,
    };
  },
};
</script>

<style></style>
