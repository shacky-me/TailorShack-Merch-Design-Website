import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
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
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("googleLoginbtn");
googleLogin.addEventListener("click", function() {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "/assets/dashboardMerch/overview.html"
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
})


function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoUrl;

  // Update the profile section with user data
  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;
}

updateUserProfile()