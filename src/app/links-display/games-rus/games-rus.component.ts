import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-rus',
  templateUrl: './games-rus.component.html',
  styleUrls: ['./games-rus.component.css']
})
export class GamesRusComponent implements OnInit {
gamesArr =[
  "Танцы и песни",
  "Развивающие игры ",
  "игрушки",
  "2-х разовые прогулки и игры на площадке",
  "Плавание в басейне,когда басейн отрыт",
  "Проведение дней рождений",
  "Празднование каждую пятницу",
  "поделки"
]
  constructor() { }

  ngOnInit(): void {
  }

}
