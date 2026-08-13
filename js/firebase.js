aimport { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCl15UMUZUhnfAAHWjtyR52APgLTuVd7a0",
  authDomain: "sweety-masala.firebaseapp.com",
  projectId: "sweety-masala",
  storageBucket: "sweety-masala.firebasestorage.app",
  messagingSenderId: "152835150862",
  appId: "1:152835150862:web:bdd6bafcc074aeb37e585f",
  measurementId: "G-NQ82YZCKG3"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { app, analytics, db };s
