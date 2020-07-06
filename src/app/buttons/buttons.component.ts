import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Button } from './buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

@Output() optionClicked = new EventEmitter <string>()
@Output() translated = new EventEmitter <string>()  
english:boolean = true
translationValue = ""

  buttons: Button[] = [
    new Button('Benefits', 'Why should you choose our daycare?', 'О нашем садике', 'RusDesc'),
    new Button('Education', 'What do our kids learn', 'Образовательная программа', "Rusdesc"),
    new Button('Games', 'See how our kids are intertained', 'Как наши дети развлекаются', 'RusDesc')
  ];
  constructor() { }

  ngOnInit() {
  }
onClick(buttonClicked: string){
  // console.log(buttonClicked)
// this.clickedOption = buttonClicked

this.optionClicked.emit(buttonClicked)
}
translatePressed(){
  this.english = !this.english
  if(this.english === true){
    this.translationValue="english"
  }else{
    this.translationValue = "russian"
  }
this.translated.emit(this.translationValue)
console.log(this.translationValue)  
// this.translated.emit(this.english) 
}

}
