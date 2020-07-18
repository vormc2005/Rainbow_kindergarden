import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {
 benefitsArr=[
  "Extended drop-off and pick-up times. We are typically open from 7:30am - 6:30pm",
  "Freshly made, home-cooked food 4 times a day, so our children never stay hungry",
   "We teach our children multiple subjects, including Math, Literature, Music, Art and more",
   "We provide our children with toys and games for them to play with",
  "We organize birthday parties for every of our child",
   "We make sure that our children stay safe and happy",
   "We are affordable and have more flexible terms than many of our competitors"
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
