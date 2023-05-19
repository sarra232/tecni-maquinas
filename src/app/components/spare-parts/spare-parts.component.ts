import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrls: ['./spare-parts.component.css']
})
export class SparePartsComponent implements OnInit {

  products: Product[] | undefined;
  parts: Product[] | undefined;

  constructor(
    private productService: ProductService, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.parts = this.search('parts');
  }

  search(nameOrId: string) {
    return this.productService.filterProducts(nameOrId);
  }

  navigateToABout(action: Product){
    this.router.navigate(['product'], { state: { data: action } });
  }

}
