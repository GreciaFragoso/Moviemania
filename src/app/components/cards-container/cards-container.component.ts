import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {

  data: any = {};
  // http = inject(HttpClient);
  // objectAPI: APIresponse = {};
  // movies: Movie[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData(1).subscribe(data => {
      this.data = data.results;
      console.log(this.data);
    })
  }
}
