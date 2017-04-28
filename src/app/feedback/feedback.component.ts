import { Component, OnInit } from '@angular/core';
import { Pizza } from "./../Model/pizza";


@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styles: []
})
export class FeedbackComponent implements OnInit {

  selectedPizza : Pizza;
  favPizza      : Pizza;
  listPizza = [
      new Pizza(0, '--Select--'),
      new Pizza(1, 'Margherita'),
      new Pizza(2, 'Funghi'),
      new Pizza(3, 'Capricciosa'),
      new Pizza(4, 'Quattro_Stagioni')
    ];

  constructor() { }

  ngOnInit() {
    
  }

  listpizza

}
