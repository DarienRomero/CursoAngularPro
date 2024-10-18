
import { TestBed } from '@angular/core/testing';
import { PokemonsService } from './pokemons.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PokemonsListResponse, SimplePokemon } from '../interfaces/simple-pokemon.interface';

const expectedPokemons: SimplePokemon[] = [
    {id: '1', name: 'bulbasaur', url: "https://pokeapi.co/api/v2/pokemon/1/"},
    {id: '2', name: 'ivysaur', url: "https://pokeapi.co/api/v2/pokemon/2/"},
]

const mockPokeApiResponse: PokemonsListResponse = {
    "count": 1302,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
    "previous": "",
    "results": [
        {name: 'bulbasaur', url: "https://pokeapi.co/api/v2/pokemon/1/"},
        {name: 'ivysaur', url: "https://pokeapi.co/api/v2/pokemon/2/"},
    ]
}


describe('PokemonsService', () => {
  let service: PokemonsService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            provideHttpClient(),
            provideHttpClientTesting(),
        ]
    })
    service = TestBed.inject(PokemonsService)
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    //Verify we can asset that no other requests were made
    httpMock.verify()
  })

  it('should create the app', () => {
    expect(service).toBeTruthy();
  });

  it('should load a page of SimplePokemons', () => {
    service.loadPage(1).subscribe(pokemons => {
        expect(pokemons).toEqual(expectedPokemons)
    });

    const req = httpMock.expectOne(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
    )

    expect(req.request.method).toBe("GET")

    req.flush(mockPokeApiResponse)
  });

  
});
