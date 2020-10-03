import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokecardComponent } from './pokecard/pokecard.component';
import { PokecardlistComponent } from './pokecardlist/pokecardlist.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'pokecardlist', component: PokecardlistComponent},
    {path:'pokecard', component: PokecardComponent},
    {path: '', redirectTo: '/pokecardlist', pathMatch: 'full'},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
