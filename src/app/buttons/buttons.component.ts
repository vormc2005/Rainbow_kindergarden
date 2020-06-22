import { Component, OnInit } from '@angular/core';
import { Button } from './buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  buttons: Button[] = [
    new Button('Benefits', 'Why should you choose our kindergarden?'),
    new Button('Education', 'What do our kids learn'),
    new Button('Games', 'See how our kids are intertained')
  ];
  constructor() { }

  ngOnInit(): void {
  }
onClick(buttonClicked){
  console.log(buttonClicked)
}
}
