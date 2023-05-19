import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  products: Product[] | undefined;
  supplies: Product[] | undefined;

  constructor(
    private productService: ProductService, 
    private router: Router) {
  }

  ngOnInit(): void {
    //this.productService.importProducts();
    this.products = this.productService.getProducts();
    this.supplies = this.search('supplies');
  }

  search(nameOrId: string) {
    return this.productService.filterProducts(nameOrId);
  }

  navigateToABout(action: Product){
    this.router.navigate(['product'], { state: { data: action } });
  }

}
