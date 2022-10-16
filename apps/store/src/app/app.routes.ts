import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'game',
    loadChildren: () => import('@bg-hoard/store/feature-game-detail').then(r => r.gameDetailRoutes)
  }
];
