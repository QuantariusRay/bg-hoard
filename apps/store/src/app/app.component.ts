import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@bg-hoard/store/ui-shared';
import { RatingPipe } from '@bg-hoard/store/util-formatters';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MatCardModule,
    CommonModule,
    HeaderComponent,
    RatingPipe,
    HttpClientModule
  ],
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games$ = this.http.get<any[]>('/api/games');

  constructor(private readonly http: HttpClient) {

  }
}
