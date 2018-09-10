import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {

  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.text);
      console.log(barcodeData.format);
      console.log(barcodeData.cancelled);
    }).catch(err => {
      console.log('Error', err);
      this.mostrarError("Error al tomar la fotografia")
    });
  }

  mostrarError(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
