import { Component, OnInit } from '@angular/core';

@Component({
  // selector - creates instance of component that matches the selector, adds to app-root element ('host element')
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
