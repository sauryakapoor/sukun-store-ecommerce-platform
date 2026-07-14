// Sample Product Data
const products = [
    { id: 1, name: "UPSC revised & updated for preliminary", price: 299, brand: "UPSC", rating: 4.5, image: "https://www.gkpublications.com/wp-content/uploads/2024/07/81LQhR15S7L._SL1500_-jpg.webp" },
    { id: 2, name: "ALL ABOUT UPSC", price: 599, brand: "UPSC", rating: 4.2, image: "https://m.media-amazon.com/images/I/81c5v4EHQTL._AC_UF894,1000_QL80_.jpg" },
    { id: 3, name: "CUET UG GUIDE", price: 299, brand: "CUET", rating: 3.8, image: "https://rukminim2.flixcart.com/image/850/1000/l26hdow0/book/q/b/w/cuet-ug-section-ii-domain-specific-subject-legal-studies-original-imagdkp56rabmkwm.jpeg?q=90&crop=false" },
    { id: 4, name: "CUET GUIDE & Questions", price: 499, brand: "CUET", rating: 4.7, image: "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/b7f826b5-6ec9-46f3-ab98-fdf250ea14a1.png" },
    { id: 5, name: "NEET GUIDE books", price: 899, brand: "NEET", rating: 4.8, image: "https://rukminim2.flixcart.com/image/850/1000/k7gikcw0/regionalbooks/g/v/3/mtg-complete-neet-guide-physic-chemistry-biology-2019-20-edition-original-imafpzwkhud7n9ur.jpeg?q=90&crop=false" },
    { id: 6, name: "NEET Champion", price: 999, brand: "NEET", rating: 3.9, image: "https://m.media-amazon.com/images/I/81jKwnwMTpL._AC_SX148_SY213_QL70_.jpg" },
    { id: 7, name: "GATE Eng. Maathematics", price: 1099, brand: "GATE", rating: 4.3, image: "https://cdn01.sapnaonline.com/product_media/9789311125275/md_9789311125275.jpg" },
    { id: 8, name: "GATE Mechanical Engineering", price: 1299, brand: "GATE", rating: 4.9, image: "https://th.bing.com/th/id/OIP.-Br-PPe-2J-XUCxbgI-gVAHaJQ?w=186&h=233&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 9, name: "JEE MAIN Mathematics", price: 899, brand: "JEE", rating: 3.5, image: "https://m.media-amazon.com/images/I/81ZPJvZXt3L._AC_UF1000,1000_QL80_.jpg" },
    { id: 10, name: "JEE ADVANCED Physics vol 1 Mechanics - 1", price: 1499, brand: "JEE", rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jO2BCS8l-qmVP5NhE9Ze7jJL3P5K085jeOQk6zm9f8Psl9ToIU8rHvhoMX37Xxlz0Ok&usqp=CAU" }
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
  
// Add to Cart ----- abhi
function addToCart(productId) {
  const product = products.find(product => product.id === productId);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  if (!cart.some(item => item.id === productId)) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
  } else {
    alert(`${product.name} is already in your cart.`);
  }
  console.log("Cart:", cart);
}

  // Add to Wishlist----- abhi
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
  