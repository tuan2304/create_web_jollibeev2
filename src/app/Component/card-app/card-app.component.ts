import {Component, Input} from '@angular/core';
import {ItemModel} from '../../models/item.model';
import {Router} from '@angular/router';
import {ItemServiceService} from '../../service/item-service.service';


@Component({
  selector: 'app-card-app',
  imports: [
  ],
  templateUrl: './card-app.component.html',
  standalone: true,
  styleUrl: './card-app.component.scss'
})

export class CardAppComponent {
  @Input() itemInCard!: ItemModel;
  constructor(
    private router: Router,
    private ItemServiceService: ItemServiceService
  ) {
  }


  navigateToDetail(id: string) {
    this.router.navigate(['/detail', id]).then();
  }

  addToCart() {
    console.log(this.itemInCard.id)
    this.ItemServiceService.addProductToCart(this.itemInCard.id)
  }
}
