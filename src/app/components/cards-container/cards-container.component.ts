import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {

  data: any = {};
  currentPage: number = 1; // esto es para la paginación, me falta la función
  totalPages: number = 40596;
  page_size: number = 20;
  pages: number[] = [];
  pageSizeOptions = [20];
  // http = inject(HttpClient);
  // objectAPI: APIresponse = {};
  // movies: Movie[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.llenarData(this.currentPage);
  }

  llenarData(page: number){
    this.apiService.getData(page).subscribe(data => {
      // console.log(data);
      this.data = data.results;
      this.currentPage = data.page;
      this.totalPages = data.total_results;
      // console.log(this.data);
    })
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.currentPage = e.pageIndex + 1;
    this.llenarData(this.currentPage);
  }

  total_length: number = 40586;
  page_number: number = 1;
}
