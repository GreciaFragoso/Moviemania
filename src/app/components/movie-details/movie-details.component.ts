import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: number = 0;
  details: any = {};
  complete_poster_path: string = '';
  imgs_url: string = 'https://image.tmdb.org/t/p/w500/';
  backdrop_image: string = '';
  genres: any = {};
  genresStrings: any = [];
  releaseYear: string = '';
  movieGenres: any[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getDetailsbyId();  
  }

  private getDetailsbyId(): void {
    this.route.queryParams.subscribe(params => { //queryParams en lugar de params
      this.id = +params['id']; // antes era q en los corchetes
      console.log(this.id)
      this.fillDetails(this.id);
    })
    // this.route.queryParams.subscribe((params: ParamMap) => {
    //     console.log(params)
    //     this.query = params.get('q')!;
    //     // this.fillDetails()
    //   })
  }

  fillDetails(movieid: number) {
    this.apiService.movieDetails(movieid).subscribe(data => {
      console.log(data);
      this.details = data;
      this.releaseYear = this.details.release_date.slice(0,4);
      console.log(this.details.genres)
      this.movieGenres = this.details.genres // asigno géneros de la  película actual
      // console.log(this.movieGenres)
      // this.backdrop_image = this.imgs_url + this.details.backdrop_path;
      // this.apiService.getGenresList().subscribe(genres => { // solicito respuesta de API de la lista de géneros
      //   // console.log(this.movieGenres)
      //   this.movieGenres.forEach((element: object) => { // for each a los géneros de la película
      //     for(let i = 0; i < genres.genres.length; i++) {
      //       if(genres.genres[i].id === element.id) { // compara t
      //         this.genresStrings.push(genres.genres[i].name);
      //       }
      //     }
      //   })
      //   console.log(this.genresStrings)
      //   return this.genresStrings;
      // })
    })
  }

  getBackdropImage() {
    if (this.details) {
      return this.imgs_url + this.details.backdrop_path;
    }
    return '';
  }
}
