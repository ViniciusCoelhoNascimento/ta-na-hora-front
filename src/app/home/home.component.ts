import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from '../item-list/item-list.component';
import { environment } from '../../environments/environment';
import { Alarm } from '../interfaces/alarm';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, ItemListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  backendURL = environment.apiURL;
  userId = localStorage.getItem('user-id');
  alarmsList: Alarm[] = [];

  constructor () {
    this.getAllAlarms();
  }

  async getAllAlarms() : Promise<Alarm[]> {
    const data = await fetch(this.backendURL + 'alarms/' + this.userId)
    return await data.json() ?? [];
  }
}
