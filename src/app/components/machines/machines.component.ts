import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  products: Product[] | undefined;
  machines: Product[] | undefined;

  constructor(
    private productService: ProductService, 
    private router: Router) {
  }

  ngOnInit(): void {
    //this.productService.importProducts();
    this.products = this.productService.getProducts();
    this.machines = this.search('machine');
  }

  search(nameOrId: string) {
    return this.productService.filterProducts(nameOrId);
  }

  navigateToABout(action: Product){
    this.router.navigate(['product'], { state: { data: action } });
  }
}

