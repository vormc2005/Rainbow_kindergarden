import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Button } from './buttons.model';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  english:boolean = true
  translationValue:string = ""
@Output() optionClicked = new EventEmitter <string>()
@Output() translated = new EventEmitter <string>()  


  buttons: Button[] = [
    new Button('About Us', '', 'О нашем садике', ''),
    new Button('Benefits', 'Why should you choose our daycare?', 'Отличительные особенности нашего детского сада', ''),
    new Button('Education', 'What do our kids learn', 'Образовательная программа', ""),
    new Button('Games', 'See how our kids are intertained', 'Развлечения и праздники для детей', '')
    
  ];
  constructor() { }

  ngOnInit() {
  }
onClick(buttonClicked){
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
// console.log(this.translationValue)  
// this.translated.emit(this.english) 
}

}
