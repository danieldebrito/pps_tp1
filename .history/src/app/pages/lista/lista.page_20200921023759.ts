import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public usuarios: Observable<any>;

  @ViewChild('lista') lista: IonList;

  constructor(
    private dataService: DataService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  public favorite(user) {
    this.presentToast('guardo en favoritos');
    this.lista.closeSlidingItems();
  }

  public borrar(user) {
    this.presentToast('borrado');
    this.lista.closeSlidingItems();
  }

  public share(user) {
    this.presentToast('compartido');
    this.lista.closeSlidingItems();
  }
}
