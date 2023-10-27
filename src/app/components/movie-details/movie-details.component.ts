import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

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
      // this.backdrop_image = this.imgs_url + this.details.backdrop_path;
    })
  }

  getBackdropImage() {
    if (this.details) {
      return this.imgs_url + this.details.backdrop_path;
    }
    return '';
  }
}
