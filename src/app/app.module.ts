import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;

import { NestoriaService } from './services/nestoria-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { RentListComponent } from './components/rent-list/rent-list.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/items/item/item.component';
import { ItemDetailsComponent } from './components/items/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    RentListComponent,
    ItemsComponent,
    ItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [NestoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
