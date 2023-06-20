import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public sorteado = 0;
  public num = '';
  public msg = '';
  public pontos = 0;
  public num2 = 10;


  constructor(public toastCtrl: ToastController) {}


  limpar() {
    this.num = '';
    this.sorteado = 0;
    this.pontos = 0;
  }


  random(): any {
    var a = parseInt(this.num);
    if( a <= 0 || a > 10 || String(a)=='NaN'){
      this.msg = 'Os números devem ser entre 1 e 10 e o campo deve ser preenchido';
      this.presentToast(this.msg);
      this.num = '';
      this.sorteado = 0;
    }else{
          var rand = Math.floor(Math.random()*(11-1)+1);
          if(this.sorteado == a){
            this.msg = 'Você ganhou 10 pontos';
            this.presentToast(this.msg)
            this.pontos = this.pontos + this.num2
          }
          return this.sorteado = rand;
    }
  }
        
  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });


    toast.present();
  }


}