import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ItemModel} from '../../models/item.model';
import {ItemServiceService} from '../../service/item-service.service';

@Component({
  selector: 'app-cart',
  imports: [
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  itemCart!: ItemModel []

  constructor(private router: Router,
              public ItemServiceService: ItemServiceService) {
    this.itemCart = this.ItemServiceService.cartList;

  }
  number = 0;
  getTotal(number: number) {
    return this.ItemServiceService.cartList.reduce((total, item) => total + item.price * item.quantity, 0)
  }
}
