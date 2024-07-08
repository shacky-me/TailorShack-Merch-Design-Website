  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyApm1g7MY6TcVI0thf497J0c5TXsGxehAQ",
    authDomain: "login-authentication-b4fb2.firebaseapp.com",
    projectId: "login-authentication-b4fb2",
    storageBucket: "login-authentication-b4fb2.appspot.com",
    messagingSenderId: "830999863375",
    appId: "1:830999863375:web:4c7b6ccba3c5365dccca3a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Submit button
  
  const googlebtn = document.getElementById('googlebtn');
  googlebtn.addEventListener("click",function (event) {
    event.preventDefault()

      //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location.href = "/html/login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  })