import { Component, OnInit} from '@angular/core';
import { Product } from '.././product'
import { CommunicateService } from '.././communicate.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

	newProduct: Product = new Product()
	products = []

	constructor(
		private _communicateService: CommunicateService,
		private _router: Router
	){
		this._communicateService.observedProducts.subscribe( (products) => {
			this.products = products
		});
	}
	updateProducts(){
		this._communicateService.updateProducts(this.products);
	}

	ngOnInit() {
		this.newProduct = new Product()
	}

	create(){
		this.products.push(this.newProduct);
		this._communicateService.updateProducts(this.products);
		this.newProduct = new Product();
		this._router.navigate(['/products']);
	}

}
