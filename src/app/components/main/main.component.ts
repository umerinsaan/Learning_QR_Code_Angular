import { Component } from '@angular/core';
import { ItemsData } from 'src/app/data/items.data';
import { Item } from 'src/app/models/Items.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  items : Item[] = ItemsData;
}
