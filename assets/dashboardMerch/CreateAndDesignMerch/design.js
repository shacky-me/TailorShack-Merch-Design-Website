function displayProduct(productType) {
  const productImage = document.getElementById('productImage');
  
  switch (productType) {
      case 'tshirt':
          productImage.src = '/assets/Images/mockup_template_nl_basic_tee_front.png'; // Replace with the actual path for T-shirt image
          productImage.alt = 'T-Shirt';
          break;
      case 'hoodie':
          productImage.src = '/assets/Images/prerender-StencilHoodie_Front (1).png'; // Replace with the actual path for Hoodie image
          productImage.alt = 'Hoodie';
          break;
      // Add more cases for other product types if needed
      default:
          productImage.src = ''; // Placeholder image or empty string
          productImage.alt = 'Product Image';
          break;
  }
}

// Example usage: change the parameter to 'tshirt' or 'hoodie' to display the respective image
displayProduct('tshirt');

const colorOptions = document.querySelectorAll('.design-color-option');
        const productImage = document.getElementById('productImage');

        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                const newImageSrc = option.getAttribute('data-image');
                productImage.src = 'newImageSrc';
            });
        });

// Select the product element
// const product = document.getElementById('productImage');

// // Select all swatches
// const swatches = document.querySelectorAll('.design-color-option');

// // Add click event listeners to each swatch
// swatches.forEach(swatch => {
//     swatch.addEventListener('click', () => {
//         // Get the color from the data-color attribute
//         const color = swatch.getAttribute('data-color');
        
//         // Change the background color of the product
//         product.style.backgroundColor = color;
//     });
// });
