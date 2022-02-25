import { Component, OnInit } from '@angular/core';

@Component({
  template: `
<div class="container">
    <app-elenco-articoli></app-elenco-articoli>
    <hr>
    <app-form-ordine></app-form-ordine>
</div>
  `,
  styles: [
  ]
})
export class CarrelloPage implements OnInit {
  cartItemNumber= 0;

  constructor() { }

  ngOnInit(): void {
  }

}
