import { ApiService } from '../../services/api.service'
import { Component } from '@angular/core';
import { SharedServiceService } from '../../services/shared/shared-service.service';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent {
  // @Output() filterSelected = new EventEmitter<string>();
  constructor(private apiService: ApiService, private sharedService: SharedServiceService) {}
  
  sortOptions: any[] = [{option: 'popularity.desc', text: 'More popular'}, 
                        {option: 'vote_average.desc', text: 'Best voted'},
                        {option: 'vote_average.asc', text: 'Worst voted'}];
  defaultSort: string = 'popularity.desc'

  ngOnInit() {
    this.getAllGenres();
  }

  AllFilters: any[] = [];
  selectedFilterId: string | null = null;

  getAllGenres() {
    this.apiService.getGenresList().subscribe(data => {
      this.AllFilters = data.genres;
      console.log(this.AllFilters);
      });
  }

  OnSelectedFilter(filterOption: string) {
    // this.filterSelected.emit(filterOption);
    this.sharedService.selectedFilter(filterOption);
    console.log(filterOption)
    this.selectedFilterId = filterOption;

  }

  // función para el select
  OnSelectedSort(sortOption: string) {
    const selectedSortOption = this.sortOptions.find(option => option.option === sortOption);

    if(selectedSortOption) {
      this.sharedService.selectedSort(selectedSortOption.option);
      console.log(selectedSortOption.option);
    }
  }
}
