import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { ItemsData } from 'src/app/data/items.data';
import { Item } from 'src/app/models/Items.model';
import { SelectedItem } from 'src/app/models/SelectedItem.model';
import { QRService } from 'src/app/services/qr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private qrService: QRService, private router: Router) { }

  items: Item[] = ItemsData;
  total: number = 0;
  selectedItems: SelectedItem[] = [];

  addItem(index: number): void {
    this.total += this.items[index].price;
    if (this.items[index].isSelected) {
      this.selectedItems.forEach(selected_item => {
        if (selected_item.item === this.items[index]) {
          selected_item.quantity += 1;
          return;
        }
      });
      return;
    }
    this.items[index].isSelected = true;
    this.selectedItems.push({
      item: this.items[index],
      quantity: 1
    });
  }

  plusClickHandler(index: number): void {
    this.selectedItems[index].quantity += 1;
    this.total += this.selectedItems[index].item.price;
  }

  minusClickHandler(index: number): void {
    this.total -= this.selectedItems[index].item.price;

    if (this.selectedItems[index].quantity === 1) {
      this.selectedItems.splice(index, 1);
      return;
    }

    this.selectedItems[index].quantity -= 1;
  }

  deleteClickHandler(index: number) {
    this.total -= this.selectedItems[index].item.price * this.selectedItems[index].quantity;
    this.selectedItems.splice(index, 1);
  }

  sendOrderToQRService() {
    this.qrService.setOrder({
      id: 'XYZ',
      selectedItems: this.selectedItems,
      total: this.total
    });
  }

  goToQRComponent() {
    this.sendOrderToQRService();
    this.router.navigate([('/QR_Payment')]);
  }
}
