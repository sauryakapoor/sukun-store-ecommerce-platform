// Sample Product Data
const products = [
    { id: 1, name: "SEM 3 Electromagnetic Field Theory", price: 119, brand: "QUANTUM", rating: 4.5, image: "https://th.bing.com/th/id/OIP.sCng1VlsiUksxe3G57TysgHaLh?rs=1&pid=ImgDetMain" },
    { id: 2, name: "SEM 7 Mechanical engineering", price: 199, brand: "QUANTUM", rating: 4.2, image: "https://wishallbook.com/wp-content/uploads/2022/09/AM-QUANTUM-.jpg" },
    { id: 3, name: "B.Sc 2 SEM 3 COMBO", price: 1099, brand: "CENTUM", rating: 3.8, image: "https://i.ytimg.com/vi/FZhtHjyXphI/maxresdefault.jpg" },
    { id: 4, name: "BDS 2nd year", price: 999, brand: "JAYPPEE", rating: 4.7, image: "https://www.aibh.in/backend/images/products/cover-9789354650963.jpg" },
    { id: 5, name: "Computer organisation and Design", price: 899, brand: "MK", rating: 4.8, image: "https://m.media-amazon.com/images/I/51aKONCOqaL.jpg" },
    { id: 6, name: "Computer Architecture And Organization", price: 999, brand: "SPRINGER", rating: 3.9, image: "https://th.bing.com/th/id/OIP.qSaAF0uw-RZDjpfiS8Yj3QHaLP?rs=1&pid=ImgDetMain" },
    { id: 7, name: "COMBO OF Python and Data Analtics", price: 2499, brand: "STEPHEN WARD", rating: 4.3, image: "https://m.media-amazon.com/images/I/41vCgbD4o-L.jpg" },
    { id: 8, name: "PHP and MySQL ", price: 999, brand: "MURACH", rating: 4.9, image: "https://www.murach.com/instructors/images/PHP4_318.jpg" },
    { id: 9, name: "Data Structure in JAVA", price: 1499, brand: "JOHN", rating: 3.5, image: "https://collegelearners.com/wp-content/uploads/2020/09/Book-DataStructure1-696x1005-1.jpg" },
    { id: 10, name: "Sensors and Control Systems in Manufacturing", price: 499, brand: "SS", rating: 4.0, image: "https://th.bing.com/th/id/OIP.oY6enmMe3aMmMBudmHRj_wAAAA?rs=1&pid=ImgDetMain" }
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
  