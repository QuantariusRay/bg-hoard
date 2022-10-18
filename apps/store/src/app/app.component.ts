import { RouterModule } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@bg-hoard/store/ui-shared';
import { RatingPipe } from '@bg-hoard/store/util-formatters';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Game } from '@bg-hoard/util-interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

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
  providers: [
    {
      provide: 'baseUrl',
      useValue: environment.apiUrl
    }
  ],
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Board Game Hoard!';
  games$!: Observable<Game[]>;

  constructor(private readonly http: HttpClient, @Inject('baseUrl') private readonly baseUrl: string) {
    console.log('component constructed');
  }

  ngOnInit() {
    this.games$ = this.http.get<Game[]>(`${this.baseUrl}/api/games`);
  }
}
