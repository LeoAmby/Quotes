import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quotes:Quote []= [
    { id:1, author:'Leo', name:'technology quote', description:'The Science of today is the Tech of tomorrow'},
    { id:2, author:'Alfie', name:'love quote', description:'You\'ve gotta dance like nobody\'s watching' },
    { id:3, author:'Keren', name:'religious quote', description:'The LORD is my Shepherd, I shall NOT want'},
    { id:4, author:'Paul', name:'philosophical quote', description:'I think therefore I am'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
