import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { User } from './interfaces/user';
import { ItemListComponent } from "./item-list/item-list.component";
import { AddAlarmComponent } from "./add-alarm/add-alarm.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ta-na-hora';

  showList = true;

  mensagem: any;
  user: User = {
    id: Number(localStorage.getItem('user-id')),
    token: localStorage.getItem('token') ?? '' //nullish coalescing
  };


  constructor(private messagingService: MessagingService) {

  }

  ngOnInit() {
    this.messagingService.requestPermission().then(token => {
      if (token) {
        this.user.token = token;
      } else {
        console.log("Nenhum token obtido.");
      }
    });

  
    this.messagingService.receiveMessage();
  }

  ativarNotificacoes() {
    this.messagingService.requestPermission();
  }

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

  }

  toggleComponent(){
    this.showList = !this.showList;
  }
}
