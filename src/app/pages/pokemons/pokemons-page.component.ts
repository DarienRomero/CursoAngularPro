import { ApplicationRef, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonsListSkeletonComponent } from "../../pokemons/ui/pokemons-list-sleleton/pokemons-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonsListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css'
})
export default class PokemonPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService)
  public isLoading = signal(true);
  // private appRef = inject(ApplicationRef)

  // private $appState = this.appRef.isStable.subscribe(isStable => {
  //   console.log('isStable', isStable)
  // })

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isLoading.set(false)
    // }, 1500);
    this.loadPokemons(0);
  }

  public loadPokemons(page: number = 0){
    this.pokemonsService.loadPage(page)
      .subscribe(pokemons => {
        console.log("On Init")
      })
  }
}
