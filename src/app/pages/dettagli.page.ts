import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { CarrelloService } from '../carrello.service';

@Component({
  template: `
    <h2 class="text-center mt-4 mb-3">Dettagli Prodotto</h2>
    <div class="card w-50 mx-auto mb-3 text-center px-3 pb-4" *ngIf="product">
    <a class="fs-4" [routerLink]="['/']"><i class="fa-solid fa-xmark"></i></a>
      <img class="img-fluid w-75 m-auto" src="{{product.imgSrc}}" alt="">

      <div>
        <h3>{{product.name}}</h3>
        <p class="fw-bold">{{product.price}} €</p>
        <p>{{product.description}}</p>
        <button class="btn btn-dark w-50 m-auto" (click)="addToCart(product)">Aggiungi al carrello</button>
      </div>

    </div>
  `,
  styles: [`
  .card {
    border: 1px solid black;
  }
  img {
    max-height: 425px;
    max-width: 360px;
  }

  a {
    text-decoration: none;
    color: black;
    position: absolute;
    top: .2em;
    left: .5em;
  }
  `],
})
export class DettagliPage implements OnInit {
  product!: Product;
  sub!: Subscription;

  constructor(private router: ActivatedRoute, private carrelloSrv: CarrelloService ) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      this.product = <Product>params;
    });
  }

  addToCart (product: Product) {
    this.carrelloSrv.addToCart(product)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
