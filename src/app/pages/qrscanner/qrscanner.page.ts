import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {
  qrURL = 'true';
  
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
  
  back() {
    this.navCtrl.navigateBack(['/docente']);
  }
}
