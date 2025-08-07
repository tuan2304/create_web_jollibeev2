import { Injectable } from '@angular/core';
import {ItemModel} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor() { }
  cartList: ItemModel[] = []
  itemList: ItemModel[] = [
    {
      id: '1',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisaver_1-min.png',
      title: 'Siêu Tiết Kiệm 1',
      price: 50000,
      quantity: 0,
    },
    {
      id: '2',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisavers_2-min.png',
      title: 'Siêu Tiết Kiệm 2',
      price: 50000,
      quantity: 0,
    },
    {
      id: '3',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisavers_3-min.png',
      title: 'Siêu Tiết Kiệm 3',
      price: 50000,
      quantity: 0,
    },
    {
      id: '4',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_329k.jpg',
      title: 'Sinh nhật thả ga, Teen quẩy siêu đã 1',
      price: 329000,
      quantity: 0,
    },
    {
      id: '5',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_399k.jpg',
      title: 'Sinh nhật thả ga, Teen quẩy siêu đã 2',
      price: 399000,
      quantity: 0,
    },
    {
      id: '6',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_449k.jpg',
      title: 'Sinh nhật thả ga, Teen quẩy siêu đã 3',
      price: 449000,
      quantity: 0,
    },
    {
      id: '7',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_1.png',
      title: 'Combo Một Mình Ăn Ngon',
      price: 78000,
      quantity: 0,
    },
    {
      id: '8',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_2_2__1.png',
      title: 'Cặp đôi ăn ý',
      price: 145000,
      quantity: 0,
    },
    {
      id: '9',
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_3.png',
      title: 'Combo Cả Nhà No Nê',
      price: 185000,
      quantity: 0,
    },
  ];

  getDetailItems(id: string): ItemModel{
    let itemInCard = this.itemList.find(itemInCard => itemInCard.id === id);
    if (itemInCard) {
      return itemInCard;
    }else {
      return {} as ItemModel;
    }
  }
  addProductToCart(id: string) {
    let itemInCard = this.itemList.find(itemInCard => itemInCard.id === id);
    if (itemInCard) {
      let itemInCart = this.cartList.find(itemCart => itemCart.id === id);

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        itemInCart = {
          id: itemInCard.id,
          img: itemInCard.img,
          quantity: 1,
          price: itemInCard.price,
          title: itemInCard.title,
        }
        this.cartList.push(itemInCart);
      }

    }
    console.log(this.cartList);


}
}

