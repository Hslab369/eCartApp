import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  getFrequentlyOrdered() {
    return [
      { name: 'iPhone 15', imgPath: 'iphone.jpg', price: 999 },
      { name: 'MacBook Pro', imgPath: 'macbook.jpg', price: 1999 },
      { name: 'AirPods Pro', imgPath: 'airpods.png', price: 249 },
    ];
  }

  getCategories() {
    return [
      {
        name: 'Mobiles',
        products: [
          {
            name: 'Samsung Galaxy S24',
            imgPath: 'samsung.jpg',
            price: 899,
          },
          {
            name: 'Google Pixel 9',
            imgPath: 'pixel.jpg',
            price: 799,
          },
          { name: 'iPhone 15', imgPath: 'iphone.jpg', price: 999 },
        ],
      },
      {
        name: 'Laptops',
        products: [
          { name: 'Dell XPS 15', imgPath: 'dell.jpg', price: 1500 },
          {
            name: 'Lenovo ThinkPad',
            imgPath: 'thinkpad.jpg',
            price: 1200,
          },
        ],
      },
    ];
  }
}
