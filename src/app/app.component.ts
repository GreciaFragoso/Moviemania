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
  http = inject(HttpClient); // patrón de inyección de dependencias, instancia a toda la app
  movies: Movie[] = [];
  // movies: APIresponse;

  changeTitle() {
    this.title = 'changed';
  }

  // ciclo de vida de un componente, trigger del componente renderizado
  ngOnInit() {
    this.http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie', {
    // this.http.get<APIresponse>('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: '6995bc8c2cdb4ff448bc25ac4e084dcb',
      }
    }) // tipado para asegurar que se reciba arreglo de objetos
    .subscribe((data) => {
      console.log(data)
      this.movies = data;
    })
    // .subscribe((data: APIresponse) => {
    //   this.movies = data.results;
    // })
  }
}
