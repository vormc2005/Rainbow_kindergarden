import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
 gamesArr=[
  "We provide toys and games for our kids",
  "We play family-friendly only cartoons to our kids",
  "We take our children to play outside on the playground two times a day",
  "Whenever swimming pool is open we take our them to swim",
 "We host end of the week party every Friday (TGIF)",
 "We host birthdays for each of our students and they absolutley love that", 
  "Our kids have afternoon nap time, so they can recharge",
]
  constructor() { }

  ngOnInit(): void {
  }

}
