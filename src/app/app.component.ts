import { Component } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './communicate.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'PPM - Project Product Management';
	nextId = 0
	products: any = []

	constructor(private _communicateService: CommunicateService){
		_communicateService.updateProducts(this.products);
	}
	updateProducts(){
		this._communicateService.updateProducts(this.products);
	}


}
