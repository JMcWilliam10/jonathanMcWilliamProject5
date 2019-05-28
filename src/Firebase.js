import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCv2LX-mydSidB0HM7xih-B0Y9tHmv984c",
  authDomain: "discountifyreact.firebaseapp.com",
  databaseURL: "https://discountifyreact.firebaseio.com"
});

const firebase = Rebase.createClass(firebase.database());
