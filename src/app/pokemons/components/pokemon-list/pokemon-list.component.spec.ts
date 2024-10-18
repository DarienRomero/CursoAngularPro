
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';
import { provideRouter } from '@angular/router';

const mockPokemon: SimplePokemon[] = [
    {
        id: '1',
        name: 'Bulbasaur',
        url: ''
    },
    {
        id: '2',
        name: 'Bulbasaur',
        url: ''
    }
]

describe('PokemonListComponent', () => {

  let fixture: ComponentFixture<PokemonListComponent>
  let app: PokemonListComponent
  let compiled: HTMLDivElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    app = fixture.componentInstance;
    compiled = fixture.nativeElement;

    
  });

  it('should create the app', () => {
    fixture.componentRef.setInput('pokemons', [])
    fixture.detectChanges()
    expect(app).toBeTruthy();
  });

  it('should render the pokemon list with 2 pokemon card', () => {
    fixture.componentRef.setInput('pokemons', mockPokemon)
    fixture.detectChanges()

    expect(compiled.querySelectorAll("pokemon-card").length).toBe(mockPokemon.length)

  });

  it('should render no hay pokemons', () => {
    fixture.componentRef.setInput('pokemons', [])
    fixture.detectChanges()

    expect(compiled.querySelectorAll("pokemon-card").length).toBe(0)
    expect(compiled.querySelector("div")?.textContent).toContain("No hay pokemons")

  });
});
