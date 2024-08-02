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


// Get all the product images

function changeImage() {
  let displayImage = document.getElementById('hoodieimage');
  if(displayImage.src.match('/assets/Images/Zuni 1001 Unisex Short Sleeve Crew Neck.jpg')) {
    displayImage.src = "assets/Images/prerender-StencilHoodie_Front.png";
  } else {
    displayImage.src = "/assets/Images/Zuni 1001 Unisex Short Sleeve Crew Neck.jpg";
  }
}

const ordersTable = document.querySelector('.table-container table tbody');

function populateOrderList() {
  ordersTable.innerHTML = ''; // Clear existing content

  if (ordersData.length === 0) {
    ordersTable.innerHTML = `<tr><td colspan="6">Your order list is empty</td></tr>`;
    return; // Exit if no orders
  }

  const tableRows = ordersData.map(order => `
    <tr>
      <td>${order.id}</td>
      <td>${order.sentToProduction}</td>
      <td>${order.customer}</td>
      <td>${order.totalCost}</td>
      <td>${order.tracking}</td>
      <td>${order.status}</td>
    </tr>
  `).join('');

  ordersTable.innerHTML = tableRows;
}

populateOrderList(); // Call initially
