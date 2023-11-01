import { Input, Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {
  @Input() filterOption: string = '';

  movies: any = [];
  currentPage: number = 1; // esto es para la paginación, me falta la función
  totalPages: number = 40596;
  page_size: number = 20;
  pages: number[] = [];
  pageSizeOptions = [20];
  // http = inject(HttpClient);
  // objectAPI: APIresponse = {};
  // movies: Movie[] = [];
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.llenarData(this.currentPage);
    console.log(this.filterOption)
  }

  genreFilter(genreId: number) {
    
  }

  llenarData(page: number){
    this.apiService.getData(page).subscribe(data => {
      console.log(data);
      this.movies = data.results;
      console.log(this.movies)
      this.currentPage = data.page;
      this.totalPages = data.total_results;
      // console.log(this.data);
    })
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.currentPage = e.pageIndex + 1;
    this.llenarData(this.currentPage); // se vuelve a llamar a la función con el nuevo número de página
  }

  getMovieDetails(id: number){
    // this.router.navigate(['movie-details/id:'], {
    //   queryParams: { q: id }
    // })
    window.open(`/movie-details?id=${id}`, '_blank');
  }

}
