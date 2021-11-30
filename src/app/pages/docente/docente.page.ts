import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  usuario: any = [];

  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.queryParams.subscribe((params) => {
      this.usuario = JSON.parse(params.userlogin);
    });
  }
  ngOnInit() {}
}
