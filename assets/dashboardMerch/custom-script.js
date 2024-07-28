function connectStore(storeName) {
  let url;
  switch(storeName) {
      case 'Shopify':
          url = 'https://www.shopify.com/';
          break;
      case 'Etsy':
          url = 'https://www.etsy.com/';
          break;
      case 'WooCommerce':
          url = 'https://woocommerce.com/';
          break;
      case 'Wix':
          url = 'https://www.wix.com/';
          break;
      case 'Squarespace':
          url = 'https://www.squarespace.com/';
          break;
      case 'Square Online':
          url = 'https://squareup.com/us/en/online-store';
          break;
      case 'Walmart':
          url = 'https://www.walmart.com/';
          break;
      case 'Webflow':
          url = 'https://webflow.com/';
          break;
      case 'Amazon':
          url = 'https://amazon.com/';
          break;
      default:
          alert('Unknown store: ' + storeName);
          return;
  }
  window.open(url, '_blank');
}