import firebase from "firebase/app"; // Corrigido para importar corretamente o pacote 'firebase/app'
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDwx3Ta0FnRbM2Iw0JjGwr_PWL4G3fuiIg",
  authDomain: "crud-back.firebaseapp.com",
  databaseURL: "https://crud-back-default-rtdb.firebaseio.com",
  projectId: "crud-back",
  storageBucket: "crud-back.appspot.com",
  messagingSenderId: "509773053183",
  appId: "1:509773053183:web:d0cbe672725aed330be0ca",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const database = firebase.database();

export { database, firebase };