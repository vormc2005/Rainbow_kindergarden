import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  buttonTypePressed = ""


  //  @Output() dataToLinksDisplay = new EventEmitter <string>()
  
  
   
  constructor() { }

  ngOnInit(){
  }

  typeToPass(data){
    // console.log(data)
    // this.dataToLinksDisplay.emit(data)
    this.buttonTypePressed =data 
    console.log(this.buttonTypePressed)
    }

}
