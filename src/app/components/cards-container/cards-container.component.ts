import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {

  data: any = {};
  currentPage: number = 1; // esto es para la paginación, me falta la función
  totalPages: number = 40596;
  pageSize: number = 20;
  pages: number[] = [];
  // http = inject(HttpClient);
  // objectAPI: APIresponse = {};
  // movies: Movie[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData(this.currentPage).subscribe(data => {
      // console.log(data);
      this.data = data.results;
      // console.log(this.data);
    })
  }
}
