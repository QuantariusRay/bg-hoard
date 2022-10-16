import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import {HeaderComponent} from "@bg-hoard/store/ui-shared";
import {RatingPipe} from "@bg-hoard/store/util-formatters";

@Component({
  standalone: true,
  imports: [RouterModule, MatCardModule, CommonModule, HeaderComponent, RatingPipe],
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
}
