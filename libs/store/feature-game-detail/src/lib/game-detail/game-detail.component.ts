import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, switchMap } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { RatingPipe } from '@bg-hoard/store/util-formatters';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'bg-hoard-game-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, RatingPipe, MatButtonModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  game$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap(id => this.http.get<any>(`/api/games/${id}`))
  );
}
