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

  constructor() { }
}
