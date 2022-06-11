import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners: any[] = [];
  restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    this.banners = [
      {banner:'assets/imgs/avatar-ben.png'},
      {banner:'assets/imgs/avatar-finn.png'},
      {banner:'assets/imgs/avatar-han.png'},
    ];
    this.restaurants= [
      {
        cover: 'assets/imgs/avatar-ben.png',
        name: 'Stayfit',
        cuisines:[
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 10
      },
      {
        cover: 'assets/imgs/avatar-han.png',
        name: 'Stayfit',
        cuisines:[
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 10
      },
      {
        cover: 'assets/imgs/avatar-finn.png',
        name: 'Stayfit3',
        cuisines:[
          'Italian',
          'Mexican'
        ],
        rating: 5,
        deliveryTime: 25,
        distance: 2.5,
        price: 10
      },

    ];
  }

}
