importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCXyvmEDirJPR6J6w6DPH6JNcErMl8qe30",
  authDomain: "instacom-f2f03.firebaseapp.com",
  databaseURL: "https://instacom-f2f03-default-rtdb.firebaseio.com",
  projectId: "instacom-f2f03",
  storageBucket: "instacom-f2f03.firebasestorage.app",
  messagingSenderId: "19895187400",
  appId: "1:19895187400:web:e0c4f787665ac317fb72fd"
});

const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Instacom';
  const body = payload.notification?.body || '';
  self.registration.showNotification(title, {
    body,
    icon: '/icon.png',
    badge: '/icon.png',
    vibrate: [200, 100, 200],
  });
});
