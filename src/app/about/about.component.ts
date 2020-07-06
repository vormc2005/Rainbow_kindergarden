import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  buttonTypePressed = ""
  languageSelected = ""

  //  @Output() dataToLinksDisplay = new EventEmitter <string>()
  
  
   
  constructor() { }

  ngOnInit(){
  }

  typeToPass(data){
    // console.log(data)
    // this.dataToLinksDisplay.emit(data)
    if(data){
    this.buttonTypePressed =data 
    }else{
      this.buttonTypePressed=""
    }
    console.log(this.buttonTypePressed)
    }

    translateTo(language:string){
      
      if (language){
        this.languageSelected = language

      }else{
        this.languageSelected ="english"
      }
      console.log(language)
    }

}
