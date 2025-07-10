import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYISnNhVbKUJnBqyd1tXLmeGyM5HOKQZE",
  authDomain: "absensi-737a6.firebaseapp.com",
  projectId: "absensi-737a6",
  storageBucket: "absensi-737a6.firebasestorage.app",
  messagingSenderId: "418456264948",
  appId: "1:418456264948:web:068cc4033e1cdde4df3ea1",
  measurementId: "G-JNQQLWYY76"
};

const app = initializeApp(firebaseConfig);

// ✅ Export auth dan db seperti sebelumnya
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Jalankan analytics hanya jika di browser
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
