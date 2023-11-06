import { Input, Component, inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared/shared-service.service';
import { combineLatest } from 'rxjs';

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
  selectedSort: string = '';
  filterOption: string = '';
  release_year: string = '';
 
  constructor(private apiService: ApiService, 
              private router: Router, 
              private sharedService: SharedServiceService,
              private cdRef: ChangeDetectorRef) {
    // this.sharedService.filterSelected$.subscribe(filterOption => {
    //   console.log(filterOption);
    //   this.filterOption = filterOption;
    // })
  }

  ngOnInit() {
    combineLatest([
      this.sharedService.filterSelected$,
      this.sharedService.selectedSort$
    ]).subscribe(([filtro, orden]) => {
      this.filterOption = filtro;
      this.selectedSort = orden;
      this.llenarData(this.currentPage, this.filterOption, this.selectedSort);
      console.log(this.filterOption)
      console.log(this.selectedSort)
      // this.cdRef.detectChanges();
    })
    // this.sharedService.filterSelected$.subscribe(filtro => {
    //   this.filterOption = filtro;
    //   this.cdRef.detectChanges();
    //   this.llenarData(this.currentPage, this.filterOption, this.selectedSort); // coloco mi función de llenar data dentro del escuchador de cambios
    //   console.log(this.filterOption);
    // })

    // this.sharedService.selectedSort$.subscribe(orden => {
    //   this.selectedSort = orden;
    //   this.cdRef.detectChanges();
    //   this.llenarData(this.currentPage, this.filterOption, this.selectedSort);
    //   console.log(this.filterOption);
    // })
    // this.llenarData(this.currentPage, this.filterOption);
    // console.log(this.filterOption)
  }

  receiveFilterSelected(filterOption: string) {
    console.log(filterOption)
  }

  receiveSortSeleted(selectedSort: string) {
    console.log(selectedSort);
  }

  llenarData(page: number, filterOption: string, selectedSort: string) { // agrego selectedSortOption 
    this.apiService.getGenreFilter(page, this.filterOption, this.selectedSort).subscribe(data => {
    // this.apiService.getData(page).subscribe(data => {
      console.log(data);
      console.log(this.filterOption);
      console.log(this.selectedSort);
      this.movies = data.results;
      // this.release_year = this.movies.release_date.slice(0,4);
      console.log(this.movies)
      this.currentPage = data.page;
      this.totalPages = data.total_results;
    })
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.currentPage = e.pageIndex + 1;
    this.llenarData(this.currentPage, this.filterOption, this.selectedSort); // se vuelve a llamar a la función con el nuevo número de página
  }

  getMovieDetails(id: number){
    window.open(`/movie-details?id=${id}`, '_blank');
  }
}
