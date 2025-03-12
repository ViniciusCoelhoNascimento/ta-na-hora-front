import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "ta-na-hora-3dfaa", appId: "1:843933765524:web:1c75208531dde21cca4981", storageBucket: "ta-na-hora-3dfaa.firebasestorage.app", apiKey: "AIzaSyCudYlx6ZQe2sHrMR6IRj5h0WhrEoe61s8", authDomain: "ta-na-hora-3dfaa.firebaseapp.com", messagingSenderId: "843933765524", measurementId: "G-GB530VTWNP" })), provideMessaging(() => getMessaging())]
};
