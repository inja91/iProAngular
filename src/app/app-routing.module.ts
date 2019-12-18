import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { OffersComponent } from './ipro/offers/offers.component';
import { SubscriptionsComponent } from './ipro/subscriptions/subscriptions.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'subscriptions', component: SubscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
