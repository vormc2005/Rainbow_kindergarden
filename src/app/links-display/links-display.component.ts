import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links-display',
  templateUrl: './links-display.component.html',
  styleUrls: ['./links-display.component.css']
})
export class LinksDisplayComponent implements OnInit {
@Input() infoToDisplay: string = ""
@Input() translatedValue: string =""  

  constructor() { }

  ngOnInit(): void {
  }
  resetInfoToDisplay(){
    this.infoToDisplay = ""
  }
  
}
