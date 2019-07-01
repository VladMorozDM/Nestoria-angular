import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RentListComponent} from './components/rent-list/rent-list.component';
import { ItemDetailsComponent } from './components/items/item-details/item-details.component';

const childRoutes: Routes = [
  {
    path: 'item/:id',
    component: ItemDetailsComponent
  }
];

const routes: Routes = [
  {
    path: 'favorite',
    component: FavoriteComponent,
    children: childRoutes
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent
  },
  {
    path: '',
    component: RentListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
