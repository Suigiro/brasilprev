import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemons } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokecardlist',
  templateUrl: './pokecardlist.component.html',
  styleUrls: ['./pokecardlist.component.sass']
})

export class PokecardlistComponent implements OnInit {
  [x: string]: any;
  
  pokemon = {} as Pokemons;
  pokemons: Pokemons[];

  constructor(private PokemonSevice: PokemonService, private router: Router){}

  ngOnInit(): void {
    this.getPokemons();
  }
  
  getPokemons(){
      this.PokemonSevice.getPokemons().subscribe((pokemons: Pokemons[])=>{
              this.pokemons = pokemons['cards'];
  });
  }  

  pokecard(pokemon: any){   
    this.router.navigate(['/pokecard'], { queryParams: {id: pokemon.id, name: pokemon.name} });
  }
}