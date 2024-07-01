$(document).ready(function() {
  // Select the dropdown button elements
  $('.dropdown-toggle').click(function() {
    // Get the dropdown menu element associated with the clicked button
    $(this).siblings('.dropdown-menu').toggleClass('show');
  });
});