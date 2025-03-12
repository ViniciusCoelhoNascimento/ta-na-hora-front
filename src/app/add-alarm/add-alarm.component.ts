import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-add-alarm',
  imports: [CommonModule, RouterModule],
  templateUrl: './add-alarm.component.html',
  styleUrl: './add-alarm.component.scss'
})
export class AddAlarmComponent {

}
