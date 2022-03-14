import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():string[]{
    return [
      '/assets/pizza1.webp',
      '/assets/burger1.webp',
      '/assets/frenchfries.jpg',
      '/assets/soup.jpg',
      '/assets/pizza2.jpg',
      '/assets/meetballs.jpg',
      '/assets/pizza3.jpg',
      '/assets/burger2.webp'

    ]
  }
}
