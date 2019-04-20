import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyB7RjNEq0OIrqD3mF3a8W3t5C0C9Db8YjQ",
  authDomain: "schoolrecord-73fe2.firebaseapp.com",
  databaseURL: "https://schoolrecord-73fe2.firebaseio.com",
  projectId: "schoolrecord-73fe2",
  storageBucket: "schoolrecord-73fe2.appspot.com",
  messagingSenderId: "76880026425"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
