import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  const mockApiService = {
    urlAPI: 'https://api.themoviedb.org/3/',
    api_key: '6995bc8c2cdb4ff448bc25ac4e084dcb',
    http: {} as HttpClient,
    movieDetails: jest.fn(),
    getGenresList: jest.fn(),
    getGenreFilter: jest.fn(),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
          declarations: [MovieDetailsComponent],
          providers: [{ provide: ApiService, useValue: mockApiService}],
          imports: [RouterTestingModule]
        }).compileComponents();
    
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance; 
  }));

  it('should get movie details from API', async () => {
    const movieIdTest = 346698;
    const movieDetailsTest = {
      "adult": false,
      "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
      "belongs_to_collection": null,
      "budget": 145000000,
      "genres": [
          {
              "id": 35,
              "name": "Comedy"
          },
          {
              "id": 12,
              "name": "Adventure"
          },
          {
              "id": 14,
              "name": "Fantasy"
          }
      ],
      "homepage": "https://www.barbie-themovie.com",
      "id": 346698,
      "imdb_id": "tt1517268",
      "original_language": "en",
      "original_title": "Barbie",
      "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      "popularity": 504.875,
      "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      "production_companies": [
          {
              "id": 82968,
              "logo_path": "/gRROMOG5bpF6TIDMbfaa5gnFFzl.png",
              "name": "LuckyChap Entertainment",
              "origin_country": "US"
          },
          {
              "id": 437,
              "logo_path": "/nu20mtwbEIhUNnQ5NXVhHsNknZj.png",
              "name": "Heyday Films",
              "origin_country": "GB"
          },
          {
              "id": 181486,
              "logo_path": null,
              "name": "NB/GG Pictures",
              "origin_country": "US"
          },
          {
              "id": 6220,
              "logo_path": "/cAj69EL1zSXmZH6STbMGZrunyMD.png",
              "name": "Mattel",
              "origin_country": "US"
          },
          {
              "id": 174,
              "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
              "name": "Warner Bros. Pictures",
              "origin_country": "US"
          }
      ],
      "production_countries": [
          {
              "iso_3166_1": "GB",
              "name": "United Kingdom"
          },
          {
              "iso_3166_1": "US",
              "name": "United States of America"
          }
      ],
      "release_date": "2023-07-19",
      "revenue": 1441700000,
      "runtime": 114,
      "spoken_languages": [
          {
              "english_name": "English",
              "iso_639_1": "en",
              "name": "English"
          }
      ],
      "status": "Released",
      "tagline": "She's everything. He's just Ken.",
      "title": "Barbie",
      "video": false,
      "vote_average": 7.207,
      "vote_count": 5871
  };

    mockApiService.movieDetails.mockReturnValue(of(movieDetailsTest));

    await component.fillDetails(movieIdTest);

    expect(component.details).toEqual(movieDetailsTest);
    expect(component.releaseYear).toBe('2023');
  });

});
