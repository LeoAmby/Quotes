import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes:Quote []= [
    new Quote (1, 'Leo', 'Technology quote', 'The Science of today is the Tech of tomorrow'),
    new Quote (2, 'Alfie','Love quote', 'You\'ve gotta dance like nobody\'s watching' ),
    new Quote (3, 'Keren','Religious quote','The LORD is my Shepherd, I shall NOT want'),
    new Quote (4, 'Paul', 'Philosophical quote','I think therefore I am'),
  ];
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
