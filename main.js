
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB1_KNPaYrYzehcp_PSthvILZHBT4ydlhI",
    authDomain: "login-auth-7a168.firebaseapp.com",
    projectId: "login-auth-7a168",
    storageBucket: "login-auth-7a168.appspot.com",
    messagingSenderId: "528727278439",
    appId: "1:528727278439:web:c90bd44ec9f111489de5c2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();


  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "";

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  } )