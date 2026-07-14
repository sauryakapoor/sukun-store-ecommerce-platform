// Sample Product Data
const products = [
    { id: 1, name: "Sony Headphones", price: 2999, brand: "Sony", rating: 4.5, image: "https://media.prod.bunnings.com.au/api/public/content/18e20f1865ff46e4a004afa0d8339bcc?v=08c0e78a" },
    { id: 2, name: "JBL Speaker", price: 1999, brand: "JBL", rating: 4.2, image: "https://www.bhphotovideo.com/images/images2000x2000/jbl_jblxtremeblkus_xtreme_portable_bluetooth_speaker_1182618.jpg" },
    { id: 3, name: "Boat Earbuds", price: 1499, brand: "Boat", rating: 3.8, image: "https://cdn1.smartprix.com/rx-iuiDPNks6-w1200-h1200/uiDPNks6.jpg" },
    { id: 4, name: "Sony Bluetooth Speaker", price: 4999, brand: "Sony", rating: 4.7, image: "https://th.bing.com/th/id/OIP.gLnLWqm-g0_Ew0pekb8fegHaHa?rs=1&pid=ImgDetMain" },
    { id: 5, name: "Bose Speaker", price: 8999, brand: "Bose", rating: 4.8, image: "https://th.bing.com/th/id/OIP.gsAE69NSpisZdx5fO-VZ5wHaHa?rs=1&pid=ImgDetMain" },
    { id: 6, name: "JBL Earphones", price: 999, brand: "JBL", rating: 3.9, image: "https://www.bhphotovideo.com/images/images1500x1500/jbl_jblt510btbluam_tune_510bt_wireless_on_ear_1620597.jpg" },
    { id: 7, name: "Boat Bluetooth Headphones", price: 2499, brand: "Boat", rating: 4.3, image: "https://media.croma.com/image/upload/v1675869615/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/246234_3_ewxwau.png" },
    { id: 8, name: "Bose Noise Cancelling Headphones", price: 9999, brand: "Bose", rating: 4.9, image: "https://th.bing.com/th/id/OIP.jcuBTmHqDrf3W4wvFvc82wHaE8?rs=1&pid=ImgDetMain" },
    { id: 9, name: "Sony Wired Earphones", price: 1499, brand: "Sony", rating: 3.5, image: "https://th.bing.com/th/id/OIP.b7VCa25MO1NfoZ_00k51DgHaHa?rs=1&pid=ImgDetMain" },
    { id: 10, name: "Boat Speakers", price: 3499, brand: "Boat", rating: 4.0, image: "https://www.boat-lifestyle.com/cdn/shop/files/Mainimage_86d113ab-e793-4b6b-9de8-0b82d4f83a8e_500x.png?v=1694000204" }
  ];
  
  // Variables
  const productGrid = document.getElementById("product-grid");
  const priceFilter = document.getElementById("price-filter");
  const priceValue = document.getElementById("price-value");
  const brandFilters = document.querySelectorAll(".brand-filter");
  const ratingFilters = document.getElementsByName("rating-filter");
  const sortBy = document.getElementById("sort-by");
  const searchInput = document.getElementById("search-bar");
  
  // Cart and Wishlist
  let cart = [];
  let wishlist = [];
  
  // Filter and Sort Products
  function filterAndSortProducts() {
    let filteredProducts = products;
  
    // Filter by price
    const maxPrice = parseInt(priceFilter.value);
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
  
    // Filter by brand
    const selectedBrands = Array.from(brandFilters)
      .filter(filter => filter.checked)
      .map(filter => filter.value);
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
    }
  
    // Filter by rating
    const selectedRating = Array.from(ratingFilters).find(filter => filter.checked)?.value;
    if (selectedRating) {
      filteredProducts = filteredProducts.filter(product => product.rating >= selectedRating);
    }
  
    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }
  
    // Sort products
    const sortValue = sortBy.value;
    if (sortValue === "price-low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "rating-high-low") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }
  
    displayProducts(filteredProducts);
  }
  
  // Display Products
  function displayProducts(products) {
    productGrid.innerHTML = "";
    products.forEach(product => {
      productGrid.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: ₹${product.price}</p>
          <p class="product-rating">★ ${product.rating}</p>
          <p>Brand: ${product.brand}</p>
          <div class="product-actions">
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Wishlist</button>
          </div>
        </div>
      `;
    });
  }
  
  // Add to Cart
  function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (!cart.includes(product)) {
      cart.push(product);
      alert(`${product.name} has been added to your cart.`);
    } else {
      alert(`${product.name} is already in your cart.`);
    }
    console.log("Cart:", cart);
  }
  
  // Add to Wishlist
  function addToWishlist(productId) {
    const product = products.find(product => product.id === productId);
    if (!wishlist.includes(product)) {
      wishlist.push(product);
      alert(`${product.name} has been added to your wishlist.`);
    } else {
      alert(`${product.name} is already in your wishlist.`);
    }
    console.log("Wishlist:", wishlist);
  }
  
  // Event Listeners
  priceFilter.addEventListener("input", () => {
    priceValue.textContent = priceFilter.value;
    filterAndSortProducts();
  });
  
  brandFilters.forEach(filter =>
    filter.addEventListener("change", filterAndSortProducts)
  );
  
  ratingFilters.forEach(filter =>
    filter.addEventListener("change", filterAndSortProducts)
  );
  
  sortBy.addEventListener("change", filterAndSortProducts);
  
  searchInput.addEventListener("input", filterAndSortProducts);
  
  // Initial Load
  filterAndSortProducts();
  