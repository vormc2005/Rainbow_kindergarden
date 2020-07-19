import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-rus',
  templateUrl: './education-rus.component.html',
  styleUrls: ['./education-rus.component.css']
})
export class EducationRusComponent implements OnInit {
  educationArr = [
    "Обучение различным предметам включая математику, письмо, литературу, музыку и искусство",
    "Учащиеся нашего центра занимаются лепкой, конструированием и развитим мелкой моторикой рук",
    "Наши ученики изучают социальные основы, учатся уважать друг друга и познают окружающую среду",
    "Мы препадаём нашим ученикам физическую культуру и учим их труду",
    "Мы предоствляем нашим ученикам все материалы, которые нужны для обучения в нашем центре",
    "Обучение ведет заслуженный учитель Российской Федерации со стажем более 30 лет"
    
    


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
