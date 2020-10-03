import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(pokemons: any[], order = '', column:string = ''): any[] {
    if (!pokemons || order === '' || !order) { return pokemons; } 
    if (pokemons.length <= 1) { return pokemons; } 
    if (!column || column === '') { 
      if(order==='asc'){return pokemons.sort()}
      else{return pokemons.sort().reverse();}
    } // sort 1d array
    return orderBy(pokemons, [column], [order]);
  }

}
