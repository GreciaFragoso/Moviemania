import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

const movieListMock = [
  {
      "adult": false,
      "backdrop_path": "/AprNYUAS2AJ3xVgg7Wwt00GVvsM.jpg",
      "genre_ids": [
          16,
          10751,
          28,
          878
      ],
      "id": 893723,
      "original_language": "en",
      "original_title": "PAW Patrol: The Mighty Movie",
      "overview": "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
      "popularity": 823.132,
      "poster_path": "/aTvePCU7exLepwg5hWySjwxojQK.jpg",
      "release_date": "2023-09-21",
      "title": "PAW Patrol: The Mighty Movie",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 146
  },
  {
      "adult": false,
      "backdrop_path": "/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
      "genre_ids": [
          16,
          35,
          10751,
          14,
          10749
      ],
      "id": 976573,
      "original_language": "en",
      "original_title": "Elemental",
      "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      "popularity": 709.763,
      "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      "release_date": "2023-06-14",
      "title": "Elemental",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 2929
  },
  {
      "adult": false,
      "backdrop_path": "/vT17lPUglrAzjEqMwjPpIDe49ty.jpg",
      "genre_ids": [
          16,
          12,
          10751,
          14
      ],
      "id": 459003,
      "original_language": "uk",
      "original_title": "Мавка: Лісова пісня",
      "overview": "Forest soul Mavka faces an impossible choice between her heart and her duty as guardian to the Heart of the Forest, when she falls in love with the talented young human musician Lukas.",
      "popularity": 677.763,
      "poster_path": "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
      "release_date": "2023-03-02",
      "title": "Mavka: The Forest Song",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 483
  },
  {
      "adult": false,
      "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
      "genre_ids": [
          16,
          28,
          12
      ],
      "id": 569094,
      "original_language": "en",
      "original_title": "Spider-Man: Across the Spider-Verse",
      "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      "popularity": 575.089,
      "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      "release_date": "2023-05-31",
      "title": "Spider-Man: Across the Spider-Verse",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 4858
  },
  {
      "adult": false,
      "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      "genre_ids": [
          16,
          10751,
          12,
          14,
          35
      ],
      "id": 502356,
      "original_language": "en",
      "original_title": "The Super Mario Bros. Movie",
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "popularity": 535.021,
      "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "release_date": "2023-04-05",
      "title": "The Super Mario Bros. Movie",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 7127
  },
  {
      "adult": false,
      "backdrop_path": "/5jlkyXB2sfEBb8EbGsEQTUQ9JGA.jpg",
      "genre_ids": [
          16
      ],
      "id": 118249,
      "original_language": "en",
      "original_title": "Thriller Night",
      "overview": "A Shrek parody of Michael Jackson's Thriller song and music video, with Donkey singing.",
      "popularity": 533.49,
      "poster_path": "/mPQei2YUIY0Ljd3O5Wy7LDuvC8S.jpg",
      "release_date": "2011-09-13",
      "title": "Thriller Night",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 73
  },
  {
      "adult": false,
      "backdrop_path": "/45zVtZx6Tzx3RKeDziK25K9geFf.jpg",
      "genre_ids": [
          16,
          10751,
          10402,
          14,
          35
      ],
      "id": 901362,
      "original_language": "en",
      "original_title": "Trolls Band Together",
      "overview": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      "popularity": 437.85,
      "poster_path": "/lxoPJR6eR5nd6nHSKIkEIV4FQWe.jpg",
      "release_date": "2023-10-12",
      "title": "Trolls Band Together",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 37
  },
  {
      "adult": false,
      "backdrop_path": "/k0VC5O8PrrJRqqDDbHDiDo8qAE0.jpg",
      "genre_ids": [
          16,
          28,
          14
      ],
      "id": 1034062,
      "original_language": "en",
      "original_title": "Mortal Kombat Legends: Cage Match",
      "overview": "In 1980s Hollywood, action star Johnny Cage is looking to become an A-list actor. But when his costar, Jennifer, goes missing from set, Johnny finds himself thrust into a world filled with shadows, danger, and deceit. As he embarks on a bloody journey, Johnny quickly discovers the City of Angels has more than a few devils in its midst.",
      "popularity": 428.503,
      "poster_path": "/1eKWqTHp4OgKdx1QX1O9LxKHr1M.jpg",
      "release_date": "2023-10-17",
      "title": "Mortal Kombat Legends: Cage Match",
      "video": false,
      "vote_average": 7,
      "vote_count": 58
  },
  {
      "adult": false,
      "backdrop_path": "/nah8AaZkcwCqY5YZfPvWpMT774o.jpg",
      "genre_ids": [
          16,
          28,
          12,
          35
      ],
      "id": 545742,
      "original_language": "ja",
      "original_title": "ワンピース エピソード オブ 空島",
      "overview": "One day, a giant ship falls onto the Straw Hats from the sky. After a narrow escape, and while they are still in shock, a map to the “Sky Island” is carried to them by the wind. While researching for the way there, they meet another pirate and learn that he is a descendant of an infamous Sky Island explorer who was even depicted in a picture book “Noland The Liar” four centuries ago. However, Noland was possibly not a liar after all and might actually have gone to the Sky Island.",
      "popularity": 415.352,
      "poster_path": "/whvgyEpPqvKXP0vZE4PMkoUmRqb.jpg",
      "release_date": "2018-12-31",
      "title": "One Piece: Episode of Skypiea",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 35
  },
  {
      "adult": false,
      "backdrop_path": "/iOJX54nVAsnPawagFiWXKv1Y6sB.jpg",
      "genre_ids": [
          16,
          12,
          10751
      ],
      "id": 1076364,
      "original_language": "en",
      "original_title": "Carl's Date",
      "overview": "Carl Fredricksen reluctantly agrees to go on a date with a lady friend—but admittedly has no idea how dating works these days. Ever the helpful friend, Dug steps in to calm Carl's pre-date jitters and offer some tried-and-true tips for making friends—if you're a dog.",
      "popularity": 406.596,
      "poster_path": "/wakoF2UgsEE3fGs5KpuwMWsaNr2.jpg",
      "release_date": "2023-06-15",
      "title": "Carl's Date",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 291
  },
  {
      "adult": false,
      "backdrop_path": "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      "genre_ids": [
          10751,
          16,
          14,
          10402,
          35,
          12
      ],
      "id": 354912,
      "original_language": "en",
      "original_title": "Coco",
      "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      "popularity": 398.279,
      "poster_path": "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      "release_date": "2017-10-27",
      "title": "Coco",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 18130
  },
  {
      "adult": false,
      "backdrop_path": "/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
      "genre_ids": [
          16,
          35,
          28,
          878
      ],
      "id": 614930,
      "original_language": "en",
      "original_title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
      "overview": "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
      "popularity": 352.58,
      "poster_path": "/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg",
      "release_date": "2023-07-31",
      "title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 816
  },
  {
      "adult": false,
      "backdrop_path": "/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
      "genre_ids": [
          16,
          10751,
          12,
          18,
          35
      ],
      "id": 150540,
      "original_language": "en",
      "original_title": "Inside Out",
      "overview": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Riley's guiding emotions— Joy, Fear, Anger, Disgust and Sadness—live in Headquarters, the control centre inside Riley's mind, where they help advise her through everyday life and tries to keep things positive, but the emotions conflict on how best to navigate a new city, house and school.",
      "popularity": 327.408,
      "poster_path": "/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg",
      "release_date": "2015-06-09",
      "title": "Inside Out",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 19595
  },
  {
      "adult": false,
      "backdrop_path": "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
      "genre_ids": [
          12,
          14,
          16,
          35,
          10751,
          28
      ],
      "id": 315162,
      "original_language": "en",
      "original_title": "Puss in Boots: The Last Wish",
      "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      "popularity": 311.731,
      "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      "release_date": "2022-12-07",
      "title": "Puss in Boots: The Last Wish",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 6587
  },
  {
      "adult": false,
      "backdrop_path": "/kIMYSzp1fH1H9adKplekLD9BuNi.jpg",
      "genre_ids": [
          16,
          28,
          878,
          12
      ],
      "id": 1003581,
      "original_language": "en",
      "original_title": "Justice League: Warworld",
      "overview": "Until now, the Justice League has been a loose association of superpowered individuals. But when they are swept away to Warworld, a place of unending brutal gladiatorial combat, Batman, Superman, Wonder Woman and the others must somehow unite to form an unbeatable resistance able to lead an entire planet to freedom.",
      "popularity": 303.697,
      "poster_path": "/pHdSS5G3wDwJp6jWgMpbSjNiTbr.jpg",
      "release_date": "2023-07-25",
      "title": "Justice League: Warworld",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 182
  },
  {
      "adult": false,
      "backdrop_path": "/8KJMOKyl9rpgb9ELEwhfBMIaTHw.jpg",
      "genre_ids": [
          10751,
          16,
          14,
          35
      ],
      "id": 1139087,
      "original_language": "en",
      "original_title": "Once Upon a Studio",
      "overview": "Created for Disney's 100th anniversary, the short features Mickey Mouse corralling a gallery of legendary Disney characters for a group photo.",
      "popularity": 291.332,
      "poster_path": "/hr8ZtwdbtjBquxlTCrczr685K5T.jpg",
      "release_date": "2023-09-24",
      "title": "Once Upon a Studio",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 225
  },
  {
      "adult": false,
      "backdrop_path": "/uELCMpKxSXqKN47iOUTjJmJD57g.jpg",
      "genre_ids": [
          16,
          10751
      ],
      "id": 1166714,
      "original_language": "en",
      "original_title": "Mickey and Friends: Trick or Treats",
      "overview": "Mickey, Minnie, Goofy, Donald and Daisy are trick-or-treating when Donald spies the spookiest mansion he’s ever seen and assumes it has the best treats. After he convinces his friends to risk a visit, the owner, Witch Hazel, casts a spell that turns them into their costumes.",
      "popularity": 283.472,
      "poster_path": "/5Gz3k1TqeAxL5M47XZzjltxQrMb.jpg",
      "release_date": "2023-10-01",
      "title": "Mickey and Friends: Trick or Treats",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 19
  },
  {
      "adult": false,
      "backdrop_path": "/eesx37T8UDuTKIRvmdGvGIKKcp3.jpg",
      "genre_ids": [
          16,
          10751,
          12
      ],
      "id": 1175959,
      "original_language": "en",
      "original_title": "The Swan Princess: Far Longer Than Forever",
      "overview": "Eager to discover the truth about his late father, King Derek and Queen Odette set off on an epic undercover adventure. With the help of their friends, Derek and Odette piece the mystery together, only to have it all unravel. Will they ever know the truth about King Max?",
      "popularity": 270.515,
      "poster_path": "/dWyxPokAp4eiJXWriYbNvU2v1V.jpg",
      "release_date": "2023-09-19",
      "title": "The Swan Princess: Far Longer Than Forever",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 4
  },
  {
      "adult": false,
      "backdrop_path": "/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg",
      "genre_ids": [
          16,
          10751,
          14,
          35
      ],
      "id": 1040148,
      "original_language": "en",
      "original_title": "Ruby Gillman, Teenage Kraken",
      "overview": "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
      "popularity": 270.198,
      "poster_path": "/8ChIb3WzYAcza1vrXR56v510MWk.jpg",
      "release_date": "2023-06-28",
      "title": "Ruby Gillman, Teenage Kraken",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 743
  },
  {
      "adult": false,
      "backdrop_path": "/tG9F7wnvLXoCDwyz0ZwyvtMBV5s.jpg",
      "genre_ids": [
          16,
          18
      ],
      "id": 715385,
      "original_language": "fr",
      "original_title": "Interdit aux chiens et aux Italiens",
      "overview": "Early 20th century, in the Ughetto family's home village, Ughettera, Northern Italy. Life in the region had become very difficult and the Ughettos dreamed of a better life abroad. Legend has it that Luigi Ughetto crossed the Alps and started a new life in France, thus changing his beloved family's destiny forever. His grandson retraces their story.",
      "popularity": 263.679,
      "poster_path": "/mYPMkz0b71qgqVIWdl1sbdewGGm.jpg",
      "release_date": "2023-01-25",
      "title": "No Dogs or Italians Allowed",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 50
  }
];
const mockPage1 = 1;
const mockGenreId1 = '16';
const mockSelectedSort1 = 'popularity.desc'
const mockGenresList = {
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
const mockMovieDetails = {
  "adult": false,
  "backdrop_path": "/AprNYUAS2AJ3xVgg7Wwt00GVvsM.jpg",
  "genre_ids": [
      16,
      10751,
      28,
      878
  ],
  "id": 893723,
  "original_language": "en",
  "original_title": "PAW Patrol: The Mighty Movie",
  "overview": "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
  "popularity": 823.132,
  "poster_path": "/aTvePCU7exLepwg5hWySjwxojQK.jpg",
  "release_date": "2023-09-21",
  "title": "PAW Patrol: The Mighty Movie",
  "video": false,
  "vote_average": 7.1,
  "vote_count": 146
}
const mockMovieId = 893723;
const httpClientMock = {
  get: jest.fn(), // mock 
}

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ // entorno de pruebas
      providers: [
        ApiService,
        {provide: HttpClient, useValue: httpClientMock },
      ],
    });
    service = TestBed.inject(ApiService);
    // httpClientMock.get.mockReturnValue(movieListMock);
  });

  it('getGenreFilter http have been called', (done) => {
    httpClientMock.get.mockReturnValue(of(movieListMock)); // of() para que la respuesta sea un observable (por el subscribe)
    service.getGenreFilter(mockPage1, mockGenreId1, mockSelectedSort1).subscribe((res) => {
      expect(res.length).toBe(20);
      done();
    })
    // service.getGenreFilter(mockPage1, mockGenreId1, mockSelectedSort1);
    // expect(httpClientMock.get).toHaveBeenCalled();
  });

  it('getGenresList http have been called', () => {
    httpClientMock.get.mockReturnValue(mockGenresList);
    service.getGenresList();
    expect(httpClientMock.get).toHaveBeenCalled();
  });

  it('getMovieDetails http have been called', () => {
    httpClientMock.get.mockReturnValue(mockMovieDetails);
    service.movieDetails(mockMovieId);
    expect(httpClientMock.get).toHaveBeenCalled();
  });
});
