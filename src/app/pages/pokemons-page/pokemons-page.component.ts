import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import { PokemonsListSkeletonComponent } from "../../pokemons/ui/pokemons-list-sleleton/pokemons-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {toSignal} from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonsListSkeletonComponent, RouterLink],
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css'
})
export default class PokemonPageComponent implements OnInit {

  private pokemonsService = inject(PokemonsService)
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute)
  private router = inject(Router)

  public isLoading = signal(true);

  private _currentPage = toSignal<number>(
    this.route.params.pipe(
      map(params => params['page'] ?? '1'),
      map(page => (isNaN(+page)) ? 1 : +page),
      map(page => Math.max(1, page))
    )
  );

  public loadOnPageChanged = effect(()=>{
    console.log("Pagina cambio", this.currentPage)
    this.loadPokemons(this.currentPage())
  }, {
    allowSignalWrites: true
  })

  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(value) {
    this._currentPage = value;
  }

  private title = inject(Title)
  // private appRef = inject(ApplicationRef)

  // private $appState = this.appRef.isStable.subscribe(isStable => {
  //   console.log('isStable', isStable)
  // })

  ngOnInit(): void {
    console.log("NG ON INIT!!!!")
    // setTimeout(() => {
    //   this.isLoading.set(false)
    // }, 1500);
    this.loadPokemons(0)
    // this.route.queryParamMap.subscribe(console.log)
  }

  public loadPokemons(page: number = 0){
    const pageToLoad = this.currentPage()! + page;
    
    this.pokemonsService.loadPage(pageToLoad)
    .pipe(
      tap(()=>{
        // this.router.navigate([], {queryParams: {
        //   page: pageToLoad
        // }}),
        tap(() => this.title.setTitle(`Pokemons SSR = Page ${pageToLoad}`))
      })
    )
      .subscribe(pokemons => {
        this.pokemons.set(pokemons)
        this.isLoading.set(false)
      })
  }
}
