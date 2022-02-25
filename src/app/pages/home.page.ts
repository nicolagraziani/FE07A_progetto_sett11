import { Component, OnInit } from "@angular/core";
import { CatalogoService } from "../catalogo.service";
import { Product } from "../models/product.interface";
import { CarrelloService } from '../carrello.service';

@Component({
  template: `

  <div *ngIf="catalogoSrv.products; else loading" class="container-md py-3">
    <div *ngFor="let product of catalogoSrv.products" class="card w-50 mx-auto px-3 pb-4  mb-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center order-2 order-lg-1">
            <h3>{{product.name}}</h3>
            <p class="fs-5">{{product.description}}</p>
             <div class="mt-5">
              <a class="btn btn-outline-dark mb-2 d-block" [routerLink]="['/dettagli', product]">Dettagli</a>
              <button class="btn btn-dark d-block w-100" (click)="addToCart(product)">Aggiungi al carrello</button>
            </div>
          </div>
          <div class="col-lg-6 p-0 order-1 order-lg-2">
            <img class="img-fluid" src="{{product.imgSrc}}" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

  <ng-template #loading>

  <div #loading class="d-flex justify-content-center mt-5">
  <div class="spinner"></div>
  </div>
  </ng-template>


  `,
  styles: [`
  .card {
    border: 1px solid black;
  }

  .spinner {
  width: 100px;
  height: 100px;
  margin: 100px auto;
  background-color: #333;

  border-radius: 100%;
  -webkit-animation: sk-scaleout .5s infinite ease-in-out;
  animation: sk-scaleout .5s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
  `],
})
export class HomePage implements OnInit {
  product!: Product;
  constructor(public catalogoSrv: CatalogoService, private carrelloSrv: CarrelloService) {}

  ngOnInit(): void {
    this.catalogoSrv.fetchProducts().then(() => {
    });
  }

  addToCart (product: Product) {
    this.carrelloSrv.addToCart(product)
  }
}
