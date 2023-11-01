import { Output, Component, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; 

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent {
  @Output() filterSelected = new EventEmitter<string>();
  //Allfilters: string[] = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary']
  constructor(private apiService: ApiService) {}
  
  ngOnInit() {
    this.getAllGenres();
  }

  AllFilters: string[] = [];

  getAllGenres() {
    this.apiService.getGenresList().subscribe(data => {
      data.genres.forEach((element) => {
        this.AllFilters.push((element.name));
      });
    })
    return this.AllFilters;
  }

  OnSelectedFilter(filterOption: string) {
    this.filterSelected.emit(filterOption);
    console.log(filterOption)
  }
}
