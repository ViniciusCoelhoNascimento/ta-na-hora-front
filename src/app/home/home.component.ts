import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from '../item-list/item-list.component';
import { environment } from '../../environments/environment';
import { Alarm } from '../interfaces/alarm';
import { AddAlarmComponent } from '../add-alarm/add-alarm.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, ListComponent, AddAlarmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showList = true;


  toggleComponent(){
    this.showList = !this.showList;
  }
}
