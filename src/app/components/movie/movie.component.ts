import { Component, Input } from '@angular/core';
import { APIresponse, Movie } from './../../models/movie.model';

@Component({
  selector: 'app-movie', // se usa para llamarlo en el contenedor padre
  templateUrl: './movie.component.html', // html correspondiente
  styleUrls: ['./movie.component.css'] // archivo CSS correspondiente
})
export class MovieComponent { // exportamos para usarlo
// input es un decorador que sirve para pasar datos de un componente padre a un hijo
  
  @Input () objectAPI: APIresponse = {
    page: 1,
    results: [],
    total_pages: 100,
    total_results: 100,
  }
  @Input() movie: Movie = { //  puedo usar 'movie!: Movie;' por si no lo encuentra y no quiero inicializar
    adult: true,
    backdrop_path: 'example',
    genre_ids: [],
    id: 0,
    original_language: 'English',
    original_title: 'The Neon Demon',
    overview: 'example',
    popularity: 7,
    poster_path: '',
    release_date: '18Junio2015',
    title: 'The Neon Demon',
    video: false,
    vote_average: 6.1,
    vote_count: 6.1,
  }; // inicializar es buena práctica para renderzar por defecto

}
