import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShopsPageComponent } from './components/shops-page/shops-page.component';
import { SalesPageComponent } from './components/sales-page/sales-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ListingItemComponent } from './components/listing-item/listing-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShopsPageComponent,
    SalesPageComponent,
    DetailsPageComponent,
    NavigationComponent,
    ListingItemComponent,
    FilterProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
