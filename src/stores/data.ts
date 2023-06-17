import { ColumnType } from './types';

export const realColumns: ColumnType[] = [
  {
    name: 'name',
    field: 'name',
    required: true,
    label: 'Name',
    align: 'center',
    sortable: true,
    type: 'text',
  },
  {
    name: 'person',
    field: 'person',
    required: true,
    label: 'Involved',
    align: 'center',
    sortable: true,
    type: 'people',
  },
  {
    name: 'status',
    field: 'status',
    required: true,
    label: 'Status',
    align: 'center',
    sortable: true,
    type: 'status',
  },
  {
    name: 'color',
    field: 'color',
    required: true,
    label: 'Color',
    align: 'center',
    sortable: true,
    type: 'color',
  },
  {
    name: 'calendar',
    field: 'calendar',
    required: true,
    label: 'Calendar',
    align: 'center',
    sortable: true,
    type: 'calendar',
  },
  {
    name: 'text',
    field: 'text',
    required: true,
    label: 'Involved',
    align: 'center',
    sortable: true,
    type: 'text',
  },
];

export const realRows: Array<any> = [
  {
    name: {
      value: 'Pikachu',
    },
    person: {
      value: ['explore', 'label'],
    },
    status: {
      value: 'Done',
    },
    color: {
      value: '#ff00ff',
    },
    calendar: {
      value: '2020/12/20',
    },
    text: {
      value: 'Quick brown fox',
    },
  },
];
