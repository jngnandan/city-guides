import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from '../src/utils/Firebase';
// import firebase from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBDvslXfsbEYbniKmElKB39vrRCkbh4CaI",
//   authDomain: "city-guides-c1a1c.firebaseapp.com",
//   projectId: "city-guides-c1a1c",
//   storageBucket: "city-guides-c1a1c.appspot.com",
//   messagingSenderId: "241312776861",
//   appId: "1:241312776861:web:1f34c363e7716327cc4a74",
//   measurementId: "G-CZ6X2W9ZD8"
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
