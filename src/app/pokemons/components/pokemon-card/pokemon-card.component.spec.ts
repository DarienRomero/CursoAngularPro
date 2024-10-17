// app.component.spec.ts
import { ComponentFixture, TestBed, async } from '@angular/core/testing'; // 1
import { PokemonCardComponent } from './pokemon-card.component';
import { provideRouter } from '@angular/router';
import { SimplePokemon } from '../../interfaces/simple-pokemon.interface';

const mockPokemon: SimplePokemon = {
    id: '1',
    name: 'Bulbasaur',
    url: ''
}


describe('PokemonCardComponent', () => {
    let fixture: ComponentFixture<PokemonCardComponent>
    let compiled: HTMLElement
    let component: PokemonCardComponent
    beforeEach(async () => { // 3
        TestBed.configureTestingModule({
            imports: [PokemonCardComponent],
            providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(PokemonCardComponent)
        fixture.componentRef.setInput('pokemon', mockPokemon)
        compiled = fixture.nativeElement as HTMLElement;
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

  it('should create the app', () => {
    console.log(compiled)
    expect(component).toBeTruthy();
  });

  it('should have the SimplePokemon signal inputValue', () => {
    const comp = fixture.componentInstance;
    expect(comp.pokemon()).toEqual(mockPokemon)
  });

  it('should render the pokemon name and image correctly', () => {
    const imgElement = compiled.querySelector('img')!
    expect(imgElement).toBeDefined();
    expect(imgElement.src).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png")
    const nameElement = compiled.querySelector("#pokemon-name")
    console.log('nameElement', nameElement)
    expect(nameElement?.textContent?.trim()).toBe("Bulbasaur")
  });

  it('should have the proper ng-reflect-router-link', () => {
    const divWithLink = compiled.querySelector('div')
    expect(divWithLink?.attributes.getNamedItem('ng-reflect-router-link')?.value).toBe(`/pokemons,${mockPokemon.name}`)
  });
});