import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import {RentListComponent} from './components/rent-list/rent-list.component';

const routes: Routes = [
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: '',
    component: RentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
