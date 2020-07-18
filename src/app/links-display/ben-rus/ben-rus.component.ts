import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ben-rus',
  templateUrl: './ben-rus.component.html',
  styleUrls: ['./ben-rus.component.css']
})
export class BenRusComponent implements OnInit {
  benefitsArr =[
    "Расширенные часы работы.  Мы открыты с 7:30 до 18:30 с понедельника по пятницу",
    "Обучение различным предметам включая математику, письмо, литературу, музыку и искусство",
    "Доступные и приемлемые цены",
    "	Развивающие игры, совместные поделки, песни, танцы и плавание!",
    "Проведение Дней Рождений",
    "Послеобеденный сон",
    "	Прогулки на свежем воздухе",
    "Домашняя кухня",
    "Безопасная и надежная атмосфера для развития вашего ребенка!"
    ]


  constructor() { }

  ngOnInit(): void {
  }

}
