import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from '../item-list/item-list.component';
import { environment } from '../../environments/environment';
import { Alarm } from '../interfaces/alarm';
import { AddAlarmComponent } from '../add-alarm/add-alarm.component';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule, ItemListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  backendURL = environment.apiURL;
  userId = localStorage.getItem('user-id');
  alarmsList: Alarm[] = [];
  
  constructor () {
    this.getAllAlarms();
  }

  async getAllAlarms() : Promise<Alarm[]> {
    console.log('user_id: ' + this.userId)
    const data = await fetch(this.backendURL + 'alarms/' + this.userId)
    return await data.json() ?? [];
  }

}
