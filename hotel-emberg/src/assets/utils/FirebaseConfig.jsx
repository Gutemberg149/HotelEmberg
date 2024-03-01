import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, onSnapshot, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu5s9dboxcfbCeRXTLolYxQ5WIP0Gan9w",
  authDomain: "hotelemberg.firebaseapp.com",
  projectId: "hotelemberg",
  storageBucket: "hotelemberg.appspot.com",
  messagingSenderId: "339546239442",
  appId: "1:339546239442:web:98dde24dc1a8e6df3f580b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function checkUserAndRetrieveInfo() {
  onSnapshot(collection(db, "myCollection"), (snapshot) => {
    console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });
}

export const auth = getAuth(app);
export default app;
