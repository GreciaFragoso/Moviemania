import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenresList, Movie } from '../models/movie.model';

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


  movieDetails(movieid: number) : Observable<Movie> {
    return this.http.get<Movie>(`${this.urlAPI}/movie/${movieid}?api_key=${this.api_key}`);
  }
  // public getGenreData(page: number) : Observable<any> {
  //   return this.http.get<any>(`${this.urlAPI}/discover/movie?api_key=${this.api_key}&page=${page}`)
  // }

  getGenresList(): Observable<GenresList> { // trae la lista de géneros
    return this.http.get<GenresList>(`${this.urlAPI}/genre/movie/list?api_key=${this.api_key}`)
  }

  getGenreFilter(page: number, genreId: string /*, selectedSort: string*/): Observable<any> {
    // return this.http.get<any>(`${this.urlAPI}/discover/movie?api_key=${this.api_key}&with_genres=${genreId}&sort_by=${selectedSort}&page=${page}`)
    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('page', page)
    .set('sort_by', 'popularity.desc')
    .set('with_genres', genreId);

    return this.http.get<any>(`${this.urlAPI}discover/movie`, { params });
  }

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