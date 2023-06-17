import { defineStore } from 'pinia';

export const useVisibleStore = defineStore('peep-show', {
  state: () => ({
    name: 'store2',
    counter: 213,
    viewSidebar: true,
    viewSettings: true,
    viewDoneWork: false,
    navbarTab: 'server',
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    toggleViewSidebar() {
      this.viewSidebar = true;
    },
  },
});
export const VisibleStore = useVisibleStore();
