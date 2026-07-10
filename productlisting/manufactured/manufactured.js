// Sample Product Data
const products = [
    { id: 1, name: "Magnetic field project", price: 849, rating: 4.5,brand:"ranz", image: "https://i.pinimg.com/474x/85/30/2b/85302b4877002671510c69ab3acc83ed.jpg" },//edited
    { id: 2, name: "Programming language self written notes by sukun", price: 499, rating: 4.2,brand:"harry", image: "https://store.codewithcurious.com/wp-content/uploads/2023/11/combo.png" },//edited
    { id: 3, name: "Neet sample paper", price: 200, rating: 3.8,brand:"simp", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGmNePh9Q-vCnqmX66kAduBS5ZWAxcHaUsA&s" },//edited
    { id: 4, name: "Study lamp", price: 349,  rating: 4.7,brand :"Phillips", image: "https://ii1.pepperfry.com/media/catalog/product/b/r/494x544/brass-iron-shade-study-lamp-with-black---brass-base-by-sapphire-brass-iron-shade-study-lamp-with-bla-hgt6o0.jpg" },//
    // { id: 5, name: "Bose Speaker", price: 8999, brand: "Bose", rating: 4.8, image: "https://th.bing.com/th/id/OIP.gsAE69NSpisZdx5fO-VZ5wHaHa?rs=1&pid=ImgDetMain" },
    { id: 6, name: "Posture reminder gadget", price: 725,  rating: 3.9,brand:"boldfit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmiyPR40-eiKkAmeOJpZVSz5Sn5eYMxhFpw&s" },//edited
    { id: 7, name: "Physical to do list", price: 299, rating: 4.3,brand:"star", image: "https://m.media-amazon.com/images/I/71OEGb1nq1L.jpg" },//edited
    // { id: 8, name: "Bose Noise Cancelling Headphones", price: 9999, brand: "Bose", rating: 4.9, image: "https://th.bing.com/th/id/OIP.jcuBTmHqDrf3W4wvFvc82wHaE8?rs=1&pid=ImgDetMain" },
    { id: 9, name: "Creative 25 minute timer", price: 200, rating: 3.5,brand:"student", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTt3m6nnODVfII08QuAhRASvtu40Uzb631CA&s" },//edited
    { id: 10, name: "Lemon battery physics project", price: 990, rating: 4.0,brand:"lion" ,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxc-9UXk0kdxq_rY4qHcKCKfq8H3v8cBb_kw&s" }//edited
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
  