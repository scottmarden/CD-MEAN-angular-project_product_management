import { Component, OnInit } from '@angular/core';
import { Product } from '.././product'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CommunicateService } from '.././communicate.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	products: Array<Product> = [];

	constructor(private _communicateService: CommunicateService){
		_communicateService.updateProducts(this.products);
	}
	updateProducts(){
		this._communicateService.updateProducts(this.products);
	}

	ngOnInit() {
		this._communicateService.observedProducts.subscribe( (products) => {
			this.products = products;
		});
 	}

	deleteProduct(product){
		const idx = this.products.indexOf(product);
		this.products.splice(idx, 1);
		this._communicateService.updateProducts(this.products);
	}
}
