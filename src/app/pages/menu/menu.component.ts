import { Component } from '@angular/core';
import {ItemModel} from '../../models/item.model';
import {CardAppComponent} from '../../Component/card-app/card-app.component';
import {Router} from '@angular/router';
import {ItemServiceService} from '../../service/item-service.service';
@Component({
  selector: 'app-menu',
  imports: [
    CardAppComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  itemInCard: ItemModel[] = []

  constructor(private router: Router,
              private ItemServiceService: ItemServiceService) {
    this.itemInCard = this.ItemServiceService.itemList;
  }
}
