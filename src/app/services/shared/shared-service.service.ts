import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private filterSelectedSource = new Subject<string>();
  filterSelected$ = this.filterSelectedSource.asObservable();

  selectedFilter(filterOption: string) {
    this.filterSelectedSource.next(filterOption);
  }

  constructor() { }
}
