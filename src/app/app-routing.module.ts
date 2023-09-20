import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QRCodeComponent } from './components/qr-code/qr-code.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'QR_Payment',
    component: QRCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
