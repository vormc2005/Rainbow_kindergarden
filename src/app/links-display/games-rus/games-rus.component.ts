import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-rus',
  templateUrl: './games-rus.component.html',
  styleUrls: ['./games-rus.component.css']
})
export class GamesRusComponent implements OnInit {
gamesArr =[
  "Мы предоставляем игрушки и игры для наших учеников",
  "Ученики принимают участие в спортивных играх и в театральных постановках",
  "Мы гуляем с детьми 2 раза в день",
  "Когда басейн открыт, мы водим детишек поплавать",
  "Мы празднуем дни рождения каждого из наших учеников в нашем саду",
  "Мы мастерим поделки из бумаги, пластилина и из природного материала",
  "Каждую пятницу мы устраиваум маленький праздник в честь успешного завершения недели",
  "Все развлечения проходят под нашим присмотром для безопасности ваших деток"
]
  constructor() { }

  ngOnInit(): void {
  }

}
