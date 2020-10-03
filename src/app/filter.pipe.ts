import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: any[], searchCard: string): any[] {
     
      if(!pokemons){
        return [];
      }

      if(!searchCard){
        return pokemons;
      }

      return pokemons.filter(it => {
          if(it.name === searchCard)
             return it;
      });
  }

}
