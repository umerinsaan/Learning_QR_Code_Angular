import { Component } from '@angular/core';
import { Order } from 'src/app/models/Order.model';
import { QRService } from 'src/app/services/qr.service';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QRCodeComponent {
  order!: Order;

  constructor(private qrService: QRService) {
    this.order = qrService.getOrder();
  }

  generateQRCode(url: string) {
    const typeNumber = 4;
    const errorCorrectionLevel = 'H';

    const qr = QRCode(typeNumber, errorCorrectionLevel);
    qr.addData(url);
    qr.make();

    const qrCodeDataUrl = qr.createDataURL(10, 0);

    return qrCodeDataUrl;
  }
}
