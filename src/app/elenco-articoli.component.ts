import { Component, OnInit } from '@angular/core';
import { CarrelloService } from './carrello.service';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-elenco-articoli',
  template: `
    <h3 class="my-3 fs-2">Articoli</h3>
    <ul *ngIf="carrelloSrv.carrello.length>0; else vuoto"  class="mb-4 list-group">
      <li *ngFor="let product of carrelloSrv.carrello"  class="list-group-item d-flex justify-content-between">
      <p class="m-0 d-inline align-self-center">{{product.name}}</p>
      <div>
        <span class="btn btn-dark btn-sm rounded-pill mx-2 fw-bold px-3">{{product.price}} €</span>
        <button class="btn btn-danger btn-sm rounded-circle mx-2 fw-bold" (click)="removeItem(product)"><i class="fa-solid fa-xmark"></i></button>
      </div>
      </li>
    </ul>
    <ng-template #vuoto>
    <p class="fs-4">Carrello vuoto!</p>
    </ng-template>
    <p class="fw-bold text-end fs-4">Totale: <span>{{carrelloSrv.totale}} €</span> </p>
  `,
  styles: [`
  button {
    height: 31px;
    width: 31px;
  }
  `]
})
export class ElencoArticoliComponent implements OnInit {

  constructor(public carrelloSrv: CarrelloService) { }

  ngOnInit(): void {
  }

  removeItem(product: Product) {
    this.carrelloSrv.removeItem(product)
  }
}
