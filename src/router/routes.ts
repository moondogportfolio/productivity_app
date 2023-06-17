import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
    children: [
      {
        path: 'home',
        components: {
          default: () => import('components/home/containers/mainContainer.vue'),
          left: () =>
            import('components/home/containers/chatlistContainer.vue'),
        },
      },
      {
        path: 'server',
        components: {
          default: () =>
            import('src/components/server/containers/mainPanel.vue'),
          left: () => import('src/components/server/containers/leftPanel.vue'),
          settings: () =>
            import('components/server/serverSettings/settingsContainer.vue'),
        },
      },
    ],
  },
  {
    path: '/test',
    component: () => import('pages/FireTest.vue'),
  },
  {
    path: '/workspace',
    component: () => import('pages/JiraPage.vue'),
  },
  {
    path: '/project',
    component: () => import('pages/JiraPage.vue'),
  },
  {
    path: '/c',
    component: () => import('pages/CompTest.vue'),
  },
  {
    path: '/profile',
    component: () => import('src/pages/ProfilePage.vue'),
  },
  {
    path: '/test2',
    component: () => import('src/pages/testPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
