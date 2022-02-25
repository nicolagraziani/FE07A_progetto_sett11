import { Component, OnInit } from '@angular/core';
import { CarrelloService } from './carrello.service';

@Component({
  selector: 'app-navbar',
  template: `
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link mx-3 fs-4" [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><i class="fa-solid fa-house me-1 fs-5"></i> Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3 fs-4" [routerLink]="['/carrello']" routerLinkActive="active"><i class="fa-solid fa-cart-shopping me-1 fs-5"></i> Carrello <span *ngIf="carrelloSrv.carrello.length>0" >({{carrelloSrv.carrello.length}})</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public carrelloSrv: CarrelloService) { }

  ngOnInit(): void {
  }

}
