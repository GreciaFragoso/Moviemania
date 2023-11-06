import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private filterSelectedSource = new BehaviorSubject<string>(''); //cambié Subject por BehaviorSubject para actualizar en tiempo real
  filterSelected$ = this.filterSelectedSource.asObservable();

  selectedFilter(filterOption: string) {
    this.filterSelectedSource.next(filterOption);
  }

  // comunicar opción de ordenamiento
  private sortSelectedSource = new BehaviorSubject<string>('');
  selectedSort$ = this.sortSelectedSource.asObservable();

  selectedSort(sortOption: string) {
    this.sortSelectedSource.next(sortOption);
  }

  constructor() { }
}
