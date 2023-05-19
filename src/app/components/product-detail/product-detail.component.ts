import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any = {
    id: "0",
    source: "0",
    name: "",
    type: "",
    trademark: "",
    shortDescription: "",
    description: ""
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      if(data){
        this.product = data !== undefined ? data : this.product;
      }
    });
  }

}
