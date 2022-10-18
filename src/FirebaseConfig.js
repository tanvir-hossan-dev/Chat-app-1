import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcD22gYkftz27zK2pC1bcvuHICUzeujWg",
  authDomain: "new-chat-app-5d80a.firebaseapp.com",
  projectId: "new-chat-app-5d80a",
  storageBucket: "new-chat-app-5d80a.appspot.com",
  messagingSenderId: "543999491293",
  appId: "1:543999491293:web:698291317556b60537af34",
  measurementId: "G-HJR8LNKVH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
