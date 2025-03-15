import { Injectable } from '@angular/core';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject<any | null>(null);

  constructor(private messaging: Messaging) {}

  // Solicita permissão para notificações e retorna o token do usuário
  async requestPermission() {
    return getToken(this.messaging, { vapidKey: environment.firebase.vapidKey })
      .then((token) => {
        console.log('Token de notificação:', token);
        return token;
      })
      .catch((err) => {
        console.error('Erro ao obter token de notificação', err);
        return null;
      });
  }

  // Escuta mensagens recebidas enquanto o app está aberto
  receiveMessage() {
    onMessage(this.messaging, (payload) => {
      console.log('Notificação recebida:', payload);
      this.currentMessage.next(payload);
    });
  }

  /*
  async postTokenGetId() {
    const response = await fetch(environment.apiURL + 'user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: this.user.token
    });

    if(response.ok){
      const data = await response.json();
      localStorage.setItem('user-id', data.id);
      localStorage.setItem('user-token', data.token);

      this.user.id = data.id;
      this.user.token = data.token;

      console.log('user-id: ' + this.user.id)
    }else{
      console.log('Error: cannot get user id.')
    }

  }*/
}
