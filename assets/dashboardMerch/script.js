// $(document).ready(function() {
//   // Select the dropdown button elements
//   $('.dropdown-toggle').click(function() {
//     // Get the dropdown menu element associated with the clicked button
//     $(this).siblings('.dropdown-menu').toggleClass('show');
//   });
// });
function toggleSidebar() {
  var sidebar = document.getElementById("mobile-sidebar");
  var navLinks = document.querySelector(".nav-links-my-temp");

  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    navLinks.classList.remove("active");
  } else {
    sidebar.style.width = "250px";
    navLinks.classList.add("active");
  }
}