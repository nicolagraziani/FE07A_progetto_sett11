import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './models/user.interface';
import { CarrelloService } from './carrello.service';

@Component({
  selector: 'app-form-ordine',
  template: `
  <h3 class="my-4">Completa ordine</h3>

  <form (ngSubmit)="submit()" #f="ngForm">
						<div ngModelGroup="userInfo" id="userInfo" #userGroup="ngModelGroup">
							<div class="form-group mb-2">
								<label class=" fs-4"for="nome">Nome</label>
								<input type="text" id="nome" [ngModel]="userForm.nome" name="nome"
									class="form-control" required #nome="ngModel">
								<p *ngIf="nome.invalid && nome.touched"><strong>Questo campo è
										obbligatorio!</strong></p>
							</div>
              <div class="form-group mb-2">
								<label class="fs-4" for="indirizzo">Indirizzo</label>
								<input type="text" id="indirizzo" [ngModel]="userForm.indirizzo" name="indirizzo"
									class="form-control" required #indirizzo="ngModel">
								<p *ngIf="indirizzo.invalid && indirizzo.touched"><strong>Questo campo è
										obbligatorio!</strong></p>
							</div>
						</div>
						<button class="btn btn-dark mt-3" [disabled]="f.invalid || carrelloSrv.carrello.length === 0" type="submit">Invia</button>
					</form>
  <p class="fs-4 mt-4" *ngIf="inviato">Ordine Completato!</p>

`,
  styles: [
  ]
})
export class FormOrdineComponent implements OnInit {
  inviato = false;

  @ViewChild('f', { static: true }) form!: NgForm

  userForm = {
		nome: '',
		indirizzo: '',
    ordine: '',
    spesaTotale: '',
	}

  user: User = {
		nome: '',
		indirizzo: '',
	}

  constructor(public carrelloSrv: CarrelloService) { }
	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.form.statusChanges?.subscribe(status => {
      if (this.inviato === true) {
        console.log('Stato del form: inviato!');
      } else {
			console.log('Stato del form: ', status);
	  	}
	  })
  }

	submit() {
    setTimeout(() => {
      console.log('form inviato!', this.form);
      this.inviato = true;
      this.user.nome = this.form.value.userInfo.nome;
      this.user.indirizzo = this.form.value.userInfo.indirizzo;
      this.form.reset();
      this.carrelloSrv.resetCart();
    }, 500);

    }

	}

