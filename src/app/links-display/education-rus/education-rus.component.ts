import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-rus',
  templateUrl: './education-rus.component.html',
  styleUrls: ['./education-rus.component.css']
})
export class EducationRusComponent implements OnInit {
  educationArr = [
    "Russian",
    "Russian",
    "Russian",
    "Russian",
    "Russian",
    "Russian",
    "Russian"


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
