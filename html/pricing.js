// Add an event listener to all the "Select Plan" buttons
const selectButtons = document.querySelectorAll('.btn-select');
selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect the user to login.html
        window.location.href = 'Login.html';
    });
});

// Check if the user is logged in when the login.html page loads
if (window.location.href.includes('login.html')) {
    // Simulate login logic
    const isLoggedIn = true; // Replace with your actual login check

    if (isLoggedIn) {
        // Redirect the user to wallet.html
        window.location.href = "/assets/dashboardMerch/overview.html";
    }
}