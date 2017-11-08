import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
	@Input() list;
	@Output() voteEmitter=new EventEmitter();
	voteUp(index){
		this.list[index].rating++;
		this.voteEmitter.emit(this.list);
	}
	voteDown(index){
		this.list[index].rating--;
		this.voteEmitter.emit(this.list);
	}
	destroy(index){
		this.list.splice(index, 1);
		this.voteEmitter.emit(this.list)
	}
	constructor() { }

	ngOnInit() {
	}

}
