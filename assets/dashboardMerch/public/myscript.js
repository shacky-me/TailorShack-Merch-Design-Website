function placeOrder() {
  var form = document.getElementById('orderForm'); // Replace 'myForm' with the actual ID of your form

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if the form is valid or if any required fields are empty
    if (form.checkValidity()) {
      window.location.href = '/assets/dashboardMerch/CreateAndDesignMerch/newproducts.html';
    } else {
      // Handle form validation errors here
      console.log('Please fill in all required fields.');
    }
  });
}