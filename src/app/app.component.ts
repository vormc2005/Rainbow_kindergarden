import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rainbow';
  buttonTypePressed = ""


//  @Output() dataToLinksDisplay = new EventEmitter <string>()


  typeToPass(data){
  // console.log(data)
  // this.dataToLinksDisplay.emit(data)
  this.buttonTypePressed =data 
  console.log(this.buttonTypePressed)
  }
}
