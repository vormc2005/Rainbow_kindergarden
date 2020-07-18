import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-rus',
  templateUrl: './games-rus.component.html',
  styleUrls: ['./games-rus.component.css']
})
export class GamesRusComponent implements OnInit {
gamesArr =[
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
