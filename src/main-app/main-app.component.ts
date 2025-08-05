import {Component, inject,} from '@angular/core';
import {CardAppComponent} from '../card-app/card-app.component';
import {ItemModel} from '../models/item.model';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-main-app',
  imports: [
    CardAppComponent,
  ],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.scss'
})
export class MainAppComponent {

  cartList: ItemModel[] = [];
  addItem(newItem:ItemModel) {
    this.cartList.push(newItem);
    console.log(this.cartList);
  }

  dialog = inject(MatDialog)

  openDialog(){
    this.dialog.open(DialogComponent, {
      data: {
        cartList: this.cartList
      },
    })
  }


  productsList: ItemModel[] = [
    {
      id: 1,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisaver_1-min.png',
      title: 'Siêu Tiết Kiệm 1',
      price: '50,000 ₫',
    },
    {
      id: 2,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisavers_2-min.png',
      title: 'Siêu Tiết Kiệm 2',
      price: '50,000 ₫',
    },
    {
      id: 3,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/j/o/jollisavers_3-min.png',
      title: 'Siêu Tiết Kiệm 3',
      price: '50,000 ₫',
    },
    {
      id: 4,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_329k.jpg',
      title: 'Sinh nhật thả ga, Teen quẩy siêu đã 1',
      price: '329,000 ₫',
    },
    {
      id: 5,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_399k.jpg',
      title: 'Sinh nhật thả ga, Teen quẩy siêu đã 2',
      price: '399,000 ₫',
    },
    {
      id: 6,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/c/o/combo_449k.jpg',
      title: 'Sinh nhật thả ga, Teen quẩy siêu đã 3',
      price: '449,000 ₫',
    },
    {
      id: 7,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_1.png',
      title: 'Combo Một Mình Ăn Ngon',
      price: '78,000 ₫',
    },
    {
      id: 8,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_2_2__1.png',
      title: 'Cặp đôi ăn ý',
      price: '145,000 ₫',
    },
    {
      id: 9,
      img: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_3.png',
      title: 'Combo Cả Nhà No Nê',
      price: '185,000 ₫',
    },
  ];


}
