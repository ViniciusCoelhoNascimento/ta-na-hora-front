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
  requestPermission() {
    return getToken(this.messaging, { vapidKey: environment.firebase.vapidKey })
      .then((token) => {
        console.log('Token de notificação:', token);
        // Aqui você pode enviar o token para seu backend para armazenar
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
}
