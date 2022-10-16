import { Route } from '@angular/router';
import { GameDetailComponent } from "./game-detail/game-detail.component";

export const gameDetailRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: GameDetailComponent
      }
    ]
  },
];
