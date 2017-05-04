import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../services/shared.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // title
  // SubTitle
  // author(s)
  // description
  // Publisher
  // publishedDate
  // Price
  // thumbnail
  constructor(private _sharedService : SharedService) { }



  ngOnInit() {
  }

  callBookService(){

  }

}
