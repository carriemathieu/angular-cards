import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector - creates instance of component that matches the selector, adds to app-root element ('host element')
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // instructs card component that it's going to receive these 4 properties
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';

  constructor() { }

  ngOnInit(): void {
  }

}
