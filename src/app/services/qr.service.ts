import { Injectable } from '@angular/core';
import { Order } from '../models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class QRService {

  private order!: Order;
  constructor() { }

  setOrder(_order: Order) {
    this.order = _order;
  }

  getOrder(): Order {
    return this.order;
  }

}
