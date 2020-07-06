import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Button } from './buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

@Output() optionClicked = new EventEmitter <string>()
@Output() translated = new EventEmitter <boolean>()  
english:boolean = true
  buttons: Button[] = [
    new Button('Benefits', 'Why should you choose our daycare?', 'О нашем садике', 'RusDesc'),
    new Button('Education', 'What do our kids learn', 'Образовательная программа', "Rusdesc"),
    new Button('Games', 'See how our kids are intertained', 'Как наши дети развлекаются', 'RusDesc')
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
translatePressed(){
this.english = !this.english
console.log(this.english)  
this.translated.emit(this.english) 
}

}
