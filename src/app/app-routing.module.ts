import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { MachinesComponent } from './components/machines/machines.component';
import { SparePartsComponent } from './components/spare-parts/spare-parts.component';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { BandsComponent } from './components/bands/bands.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'parts', component: SparePartsComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'product', component: ProductDetailComponent, data: {} },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
