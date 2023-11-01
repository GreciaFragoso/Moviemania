import { Input, Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared/shared-service.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {
  // @Input() filterOption = '';

  movies: any = [];
  currentPage: number = 1; // esto es para la paginación, me falta la función
  totalPages: number = 40596;
  page_size: number = 20;
  pages: number[] = [];
  pageSizeOptions = [20];
  selectedSort: string = 'popularity.desc';
  filterOption: string = '';
  // http = inject(HttpClient);
  // objectAPI: APIresponse = {};
  // movies: Movie[] = [];
  constructor(private apiService: ApiService, private router: Router, private sharedService: SharedServiceService) {
    this.sharedService.filterSelected$.subscribe(filterOption => {
      console.log(filterOption);
      this.filterOption = filterOption;
    })
  }

  ngOnInit() {
    this.llenarData(this.currentPage);
    console.log(this.filterOption)
  }

  // genreFilter() {
  //   this.apiService.getGenreFilter(this.filterOption, this.currentPage, this.selectedSort).subscribe(data => {
  //     console.log(data);
  //     this.movies = data.results;
  //     console.log(this.movies)
  //     this.currentPage = data.page;
  //     this.totalPages = data.total_results;
  //   })
  // }
  receiveFilterSelected(filterOption: string) {
    console.log(filterOption)
  }

  llenarData(page: number){
    this.apiService.getGenreFilter(page, this.filterOption/*, this.selectedSort*/).subscribe(data => {
    // this.apiService.getData(page).subscribe(data => {
      console.log(data);
      this.movies = data.results;
      console.log(this.movies)
      this.currentPage = data.page;
      this.totalPages = data.total_results;
    })
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.currentPage = e.pageIndex + 1;
    this.llenarData(this.currentPage); // se vuelve a llamar a la función con el nuevo número de página
  }

  getMovieDetails(id: number){
    window.open(`/movie-details?id=${id}`, '_blank');
  }
}
