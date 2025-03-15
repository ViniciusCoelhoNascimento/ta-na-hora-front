import { Component, Input } from '@angular/core';
import { Alarm } from '../interfaces/alarm';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  @Input() alarm!:Alarm;

  next_time: number = 0;

  constructor (){

   this.next_time = this.alarm.last_time_medicine_taken.getHours() + this.alarm.interval.getHours();
  }
}
