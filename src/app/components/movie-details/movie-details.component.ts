import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../services/api.service';
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
  }

  fillDetails(movieid: number) {
    this.apiService.movieDetails(movieid).subscribe(data => {
      console.log(data);
      this.details = data;
      this.releaseYear = this.details.release_date.slice(0,4);
      console.log(this.details.genres)
      this.movieGenres = this.details.genres // asigno géneros de la  película actual
    })
  }

  getBackdropImage() {
    if (this.details) {
      return this.imgs_url + this.details.backdrop_path;
    }
    return '';
  }
}
