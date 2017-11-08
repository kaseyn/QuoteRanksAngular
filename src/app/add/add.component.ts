import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
	quote = new Quote();
	@Output() quoteEmitter = new EventEmitter;
	onSubmit(){
		this.quoteEmitter.emit(this.quote);
		this.quote = new Quote();
	}

	constructor() { }

	ngOnInit() {
	}

}
