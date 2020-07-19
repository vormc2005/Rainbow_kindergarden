import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
 gamesArr=[
  "We provide toys and games for our kids",
  "We take our children to play outside on the playground two times a day",
  "Whenever swimming pool is open, we take our them to swim",
   "We host end of the week party every Friday (TGIF)",
   "We host birthdays for each of our students", 
   "We host dance and singing parties", 
    "Our kids have afternoon nap time, so they can recharge",
    "We make sure that your children are 100% safe"
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
