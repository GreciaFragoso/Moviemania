import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlAPI = 'https://api.themoviedb.org/3/';
  private api_key = '6995bc8c2cdb4ff448bc25ac4e084dcb';

  constructor(private http: HttpClient) { }

  getData(page: number) : Observable<any> {
    return this.http.get<any>(`${this.urlAPI}/discover/movie?api_key=${this.api_key}&page=${page}`)
    }


  movieDetails(movieid: number) {
    return this.http.get<any>(`${this.urlAPI}/movie/${movieid}?api_key=${this.api_key}`);
  }
  // public getGenreData(page: number) : Observable<any> {
  //   return this.http.get<any>(`${this.urlAPI}/discover/movie?api_key=${this.api_key}&page=${page}`)
  // }
  }

  //   this.http.get<APIresponse>('https://api.themoviedb.org/3/discover/movie', {
  //     params: {
  //       api_key: '6995bc8c2cdb4ff448bc25ac4e084dcb',
  //     }
  //   }) // tipado para asegurar que se reciba arreglo de objetos
  //   .subscribe((data) => {
  //     console.log(data)
  //     this.objectAPI = data.results;
  //   })