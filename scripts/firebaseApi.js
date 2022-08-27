const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMuNJEJBmVOfryz4rAvH916No2yhxuGQk",
  authDomain: "pomodoro-b8172.firebaseapp.com",
  projectId: "pomodoro-b8172",
  storageBucket: "pomodoro-b8172.appspot.com",
  messagingSenderId: "741404649733",
  appId: "1:741404649733:web:db7c469c0d058f1288ef6c",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((resolve) => {
      console.log(resolve.user);
    })
    .catch((error) => {
      alert("Incorrect email or password.");
      console.log(error.code);
      console.log(error.message);
    });
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((resolve) => {
      console.log(resolve.user);
    })
    .catch((error) => {
      alert(
        "Email already in use. If you already have a profile, you can sign in."
      );
      console.log(error.code);
      console.log(error.message);
    });
}

export { logIn, register };
