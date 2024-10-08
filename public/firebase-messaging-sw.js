// Import Firebase messaging service worker
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker
const firebaseConfig = {
  apiKey: "AIzaSyAAgcqDswepf8wSncJox_w9wX2OX2Mejxw",
  authDomain: "learner-dc009.firebaseapp.com",
  databaseURL: "https://learner-dc009-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learner-dc009",
  storageBucket: "learner-dc009.appspot.com",
  messagingSenderId: "215967958133",
  appId: "1:215967958133:web:682c96e93b497f5950a43c"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.error("Firebase initialization error", err);
}

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification
  const notificationTitle = payload.notification?.title || 'Notification';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new message',
    icon: '/firebase-logo.png'  // Ensure the path is correct
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
