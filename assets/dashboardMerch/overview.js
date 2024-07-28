// Get the necessary elements
const usernameElement = document.querySelector('.username');
const logoutElement = document.getElementById('logout');
const profileElement = document.getElementById('profile-item');
const settingsElement = document.getElementById('settings-item');

// Check if the user is logged in
const isLoggedIn = true; // Replace with your login logic

if (isLoggedIn) {
    // Get the user's name
    const userName = ''; // Replace with the user's name

    // Show the user's name
    usernameElement.textContent = userName;

    // Add event listener to the logout button
    logoutElement.addEventListener('click', () => {
        // Redirect to index.html
        window.location.href = '/html/index.html';
    });

    // Add event listener to the profile item
    profileElement.addEventListener('click', () => {
        // Redirect to profile.html
        window.location.href = '/assets/dashboardMerch/settings.html';
    });

    // Add event listener to the settings item
    settingsElement.addEventListener('click', () => {
        // Redirect to settings.html
        window.location.href = '/assets/dashboardMerch/settings.html';
    });
}