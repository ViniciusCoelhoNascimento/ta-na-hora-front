importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCudYlx6ZQe2sHrMR6IRj5h0WhrEoe61s8",
    authDomain: "ta-na-hora-3dfaa.firebaseapp.com",
    projectId: "ta-na-hora-3dfaa",
    storageBucket: "ta-na-hora-3dfaa.firebasestorage.app",
    messagingSenderId: "843933765524",
    appId: "1:843933765524:web:22fd495976a288d8ca4981",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Notificação recebida em segundo plano', payload);
  
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/assets/icons/icon-192x192.png' // Ícone da notificação
  });
});
