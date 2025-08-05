import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemModel} from '../models/item.model';

@Component({
  selector: 'app-card-app',
  imports: [],
  templateUrl: './card-app.component.html',
  styleUrl: './card-app.component.scss'
})
export class CardAppComponent {
  @Input() itemInCard!: ItemModel;
  @Output() addToCartEvent = new EventEmitter<ItemModel>();

  addtoCart(item : ItemModel) {
    this.addToCartEvent.emit(item);
  }
}
