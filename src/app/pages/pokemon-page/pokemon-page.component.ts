import { Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces/pokemon.interface';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pokemon-page',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export default class PokemonPageComponent implements OnInit {
  private pokemonsService = inject(PokemonsService)
  private route = inject(ActivatedRoute)
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(!id){
      return;
    }
    this.pokemonsService.loadPokemon(id).subscribe((data)=>this.pokemon.set(data))
  }
  public pokemon = signal<Pokemon | null>(null);
}
