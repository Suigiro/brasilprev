import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemons } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.sass']
})
export class PokecardComponent implements OnInit {
  
  pokemon = {} as Pokemons;  
  pokemons: Pokemons[];

  
  
  constructor(private PokemonSevice: PokemonService, private activatedRoute: ActivatedRoute, private router: Router) {
      
   }

  ngOnInit(): void {
    let params = this.activatedRoute.queryParams._value;
    
    if(params.name!=''){
      this.getPokemonsByName(params);
    }else{
      this.router.navigate(['/pokecardlist']);
    }
    
    
  }
  
  getPokemonsByName(pokemon: any[]){
    this.PokemonSevice.getPokemonsByName(pokemon).subscribe((pokemons: Pokemons[])=>{
            this.pokemons = pokemons['cards'];
            console.log(this.pokemons);
    });
  }
}
