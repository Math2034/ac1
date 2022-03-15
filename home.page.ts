import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorConvertido: number;
  valor_dolar:string;
  valor_real:string;
  nota_agh:string;
  nota_ac:string;
  nota_at:string;
  nota:number;

  constructor(public toast:ToastController) {}

  Multiplicar(){
    this.valorConvertido=(parseFloat(this.valor_real)) * (parseFloat(this.valor_dolar));
  } 

  Nota(){
    this.nota = (parseFloat(this.nota_agh) + (parseFloat(this.nota_ac) * 2) + (parseFloat(this.nota_at) * 7)) / 10;
  }
}
