// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKUvvJScJRKNvD2fCIM74fRO-fVH_y9FQ",
  authDomain: "sparta-react-cc1c8.firebaseapp.com",
  projectId: "sparta-react-cc1c8",
  storageBucket: "sparta-react-cc1c8.appspot.com",
  messagingSenderId: "366491403459",
  appId: "1:366491403459:web:4efb0661f4a541cc400e76",
  measurementId: "G-SP8WNJP0HJ",
};

firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

export { firestore };
