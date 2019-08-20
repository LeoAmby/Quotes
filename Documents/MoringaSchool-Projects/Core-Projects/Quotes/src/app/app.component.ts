import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    { id:1, author:'Leo', name:'technology quote'},
    { id:2, author:'Alfie', name:'love quote'},
    { id:3, author:'Keren', name:'religious quote'},
    { id:4, author:'Paul', name:'philosophical quote'},
  ];
}
