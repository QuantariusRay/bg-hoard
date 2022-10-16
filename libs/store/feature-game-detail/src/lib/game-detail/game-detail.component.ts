import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: 'bg-hoard-game-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent {
  constructor(private route: ActivatedRoute) {
  }

  gameId$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
  );
}
