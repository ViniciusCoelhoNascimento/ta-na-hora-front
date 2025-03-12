import { Routes } from '@angular/router';
import { AddAlarmComponent } from './add-alarm/add-alarm.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'add-alarm',
        component: AddAlarmComponent,
        title: 'Novo alarme'
    }
];