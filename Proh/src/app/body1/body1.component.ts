import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from '../list.service';
import { Body2Component } from '../body2/body2.component';


@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.css']
})
export class Body1Component implements OnInit {

  products;
  searchText: String;
  constructor(private _listService:ListService) { }

  ngOnInit() {
     this._listService.ISP_services().subscribe(proData => {
       this.products = proData;
       console.log(proData);
      });
  }

  isSearch:boolean;
  isValid:boolean = false;
  btnClick(){
    this.isSearch ? this.isSearch = false : "";
    this.isValid ? this.isValid = false : this.isValid = true;
  }
  searchBtn(){
    // this.searchText = event;
    console.log(event)
    this.isValid = false;
    this.isSearch = true;
  }

  @Output() eventClicked = new EventEmitter<Body2Component>();

  onClick(event: Body2Component): void {
    this.eventClicked.emit(event);
  }

}
