import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBVbQL63ko9nKdKWAl3FwqAUQGNZDAKuqs",
  authDomain: "cart-2643e.firebaseapp.com",
  projectId: "cart-2643e",
  storageBucket: "cart-2643e.appspot.com",
  messagingSenderId: "777236528332",
  appId: "1:777236528332:web:ea4c7205ad62b2ad9ad669"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
