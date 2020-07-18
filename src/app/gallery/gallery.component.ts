import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
kidsImages=[
  "../../assets/img/IMG_1694.jpg",
 "../../assets/img/IMG_1695.jpg",
 "../../assets/img/IMG_1696001.jpg",
 "../../assets/img/IMG_1697.jpg",
 "../../assets/img/IMG_1698.jpg",
 "../../assets/img/IMG_1699.jpg",
 "../../assets/img/IMG_1700.jpg",
 "../../assets/img/IMG_1701.jpg",
 "../../assets/img/IMG_1702.jpg",
  "../../assets/img/IMG_1703.jpg",
   "../../assets/img/IMG_1704.jpg"]
  constructor() { }

  ngOnInit(): void {
  }

}
