import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { MapDirecctionComponent } from './components/map-direcction/map-direcction.component';
import { MachinesComponent } from './components/machines/machines.component';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { SparePartsComponent } from './components/spare-parts/spare-parts.component';
import { BandsComponent } from './components/bands/bands.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    MapDirecctionComponent,
    MachinesComponent,
    SuppliesComponent,
    SparePartsComponent,
    BandsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
