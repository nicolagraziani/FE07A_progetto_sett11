import { Injectable } from '@angular/core';
import { Product } from './models/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
	products!: Product[];

  constructor(private http: HttpClient) {  }

	fetchProducts() {
    return new Promise<void>((succ) => {
        this.http.get('http://localhost:4201/products').subscribe((ris) => {
          console.log(ris);
          this.products = ris as Product[];
        succ();
      });
    });

  }
}
