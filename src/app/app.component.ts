import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from './models/movie.model'
import { APIresponse } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moviemania';
}
