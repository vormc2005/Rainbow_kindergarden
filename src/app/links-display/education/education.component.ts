import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationArr = [ 
    "We teach our kids Russian literature",
   "We read well known stories and fairy tales that have educational meanning",     
    "We teach our children basic Math skills",    
    "Our kids make Art projects together",
    "Our children learn music, singing and dancing",  
    "Our kids learn to play together",    
    "We teach our students basic social skills, respect each other and how to communicate with each other",    
    "We always try to have fun while learning new skills",
    "We make sure that each and every of our students makes solid porgress and is not left behind in his or hers studies"
]
  constructor() { }

  ngOnInit(): void {
  }

}
