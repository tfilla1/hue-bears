export default [
  {
    path: '/home',
    name: 'app-select',
    component: () => import('./views/app-select.vue')
  },
  {
    path: '/games',
    name: 'games-view',
    component: () => import('./applets/games/home-view.vue')
    // children: [
    //     {
    //         path: ':id/scores',
    //         name: 'scores-view',
    //         component: () => import('./applets/games/views/scores-view.vue'),
    //     }
    // ]
  },
  {
    path: '/scores',
    name: 'scores-view',
    component: () => import('./applets/games/views/scores-view.vue'),

  }
]
