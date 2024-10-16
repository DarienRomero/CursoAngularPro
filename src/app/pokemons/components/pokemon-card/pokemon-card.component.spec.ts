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
});