import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemServiceService} from '../../service/item-service.service';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl:'./detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  itemInCard!: ItemModel

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private  itemService: ItemServiceService
  ) {
    let {id} = this.activatedRoute.snapshot.params;
    console.log(id);
    this.itemInCard = this.itemService.getDetailItems(id);
    console.log(this.itemInCard);
  }
  navigateToMenu() {
    this.router.navigate(['/menu']).then();
  }
}
