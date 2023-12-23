import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SalesPageComponent } from './components/sales-page/sales-page.component';
import { ShopsPageComponent } from './components/shops-page/shops-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sales', component: SalesPageComponent },
  { path: 'shops', component: ShopsPageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
