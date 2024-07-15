const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET.appspot.com",  // Optional (if using Cloud Storage)
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // Optional (if using Cloud Messaging)
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

// Sign out function with redirect
function signOut() {
  auth.signOut().then(() => {
    console.log('Signed out successfully!');
    window.location.href = "index.html";
  }).catch((error) => {
    console.error('Sign out error:', error);
    // Handle sign out errors (optional)
  });
}

const logoutItem = document.getElementById('logout');

logoutItem.addEventListener('click', function() {
  signOut();
});