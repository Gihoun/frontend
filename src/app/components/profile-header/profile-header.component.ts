import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  Logout() {
    this.navCtrl.navigateBack(['/home']);
  }
}
