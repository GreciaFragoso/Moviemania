import { Component, Input } from '@angular/core';
import { Movie } from './../../models/movie.model';

@Component({
  selector: 'app-movie', // se usa para llamarlo en el contenedor padre
  templateUrl: './movie.component.html', // html correspondiente
  styleUrls: ['./movie.component.css'] // archivo CSS correspondiente
})
export class MovieComponent { // exportamos para usarlo
// input es un decorador que sirve para pasar datos de un componente padre a un hijo
  @Input() movie: Movie = { //  puedo usar 'movie!: Movie;' por si no lo encuentra y no quiero inicializar
    id: 0, // incializo valores default
    title: 'The Neon Demon',
    genre: 'Thriller',
  }; // inicializar es buena práctica para renderzar por defecto
}
