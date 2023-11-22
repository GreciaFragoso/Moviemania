import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonsContainerComponent } from './buttons-container.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';
import { SharedServiceService } from '../../services/shared/shared-service.service';

describe('ButtonsContainerComponent', () => {
  let component: ButtonsContainerComponent;
  let fixture: ComponentFixture<ButtonsContainerComponent>;
  let mockApiService: jest.Mocked<ApiService>;
  let mockSharedService: jest.Mocked<SharedServiceService>;

  beforeEach(waitForAsync(() => {
    mockApiService = {
      getGenresList: jest.fn(),
    } as unknown as jest.Mocked<ApiService>;

    mockSharedService = {
      selectedFilter: jest.fn(),
    } as unknown as jest.Mocked<SharedServiceService>;

    TestBed.configureTestingModule({
      declarations: [ButtonsContainerComponent],
      providers: [
        { provide: ApiService, useValue: mockApiService}
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsContainerComponent);
    component = fixture.componentInstance;
  })

  it('should fetch genres', async () => {
    const genresList = {
      "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
      ]
    }
    mockApiService.getGenresList.mockReturnValue(of(genresList)); // config valor de retorno mock

    component.getAllGenres(); // se llama al método
    await fixture.whenStable(); // espera tareas asíncronas

    // aserciones
    expect(component.AllFilters).toEqual(genresList.genres);
    expect(mockApiService.getGenresList).toHaveBeenCalled();
  });

  // it('Should get filter option from buttons container by shared service', async () => {

  // })
});
