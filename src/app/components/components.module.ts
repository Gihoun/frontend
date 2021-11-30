import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { StandarFooterComponent } from './standar-footer/standar-footer.component';
import { StandarHeaderComponent } from './standar-header/standar-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeHeaderComponent,
    LoginModalComponent,
    ProfileHeaderComponent,
    StandarFooterComponent,
    StandarHeaderComponent,
  ],
  imports: [CommonModule,IonicModule,RouterModule],
  exports: [
    HomeHeaderComponent,
    LoginModalComponent,
    ProfileHeaderComponent,
    StandarFooterComponent,
    StandarHeaderComponent,
  ],
})
export class ComponentsModule {}
