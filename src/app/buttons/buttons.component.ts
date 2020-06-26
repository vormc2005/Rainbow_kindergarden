import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Button } from './buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

@Output() optionClicked = new EventEmitter <string>()
  

  buttons: Button[] = [
    new Button('Benefits', 'Why should you choose our kindergarden?'),
    new Button('Education', 'What do our kids learn'),
    new Button('Games', 'See how our kids are intertained')
  ];
  constructor() { }

  ngOnInit(): void {
  }
onClick(buttonClicked: string){
  // console.log(buttonClicked)
// this.clickedOption = buttonClicked
// console.log(this.clickedOption)
this.optionClicked.emit(buttonClicked)
}
}
