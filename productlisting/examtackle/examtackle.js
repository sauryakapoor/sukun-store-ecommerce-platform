// Product Data
const products = [
    { id: 1, name: "OSWAAL Jee mock test papers (15 papers )", price: 299, BY: "OSWAAL", rating: 4.5, image: "https://oswaalbooks.com/cdn/shop/files/NTA-JEE-_Main_-15-Mock-Test-Papers-Book-_For-2024-Exam_-Oswaal-Books-and-Learning-Private-Limited-1696683332347_640x640.jpg?v=1696683334" },
    { id: 2, name: "Mock test paper CBSE Class 12", price: 159, BY: "STUDENTS", rating: 4.2, image: "https://th.bing.com/th/id/OIP.vYFVyBUOpwa1BFQgdjq9cgAAAA?rs=1&pid=ImgDetMain" },
    { id: 3, name: "50 JEE MAINS OMR Sheets pratice of mc mock & sample papers", price: 499, BY: "STUDENTS", rating: 3.8, image: "https://th.bing.com/th/id/R.dc94e988401a69e9b933d2307e797bde?rik=%2br29i0efnwrnBw&riu=http%3a%2f%2frukmini1.flixcart.com%2fimage%2f300%2f300%2fkuyf8nk0%2fbook%2f6%2ft%2fj%2f50-jee-main-omr-sheets-90-questions-each-self-practice-of-mcq-original-imag7yhfn3hnbfgq.jpeg&ehk=mWWiV8dRB5pC%2bcJB7F2ATqMF%2f%2f8IPzxC4O1cNZQIWKA%3d&risl=&pid=ImgRaw&r=0" },
    { id: 4, name: "Sample papers 2024 CBSE English Class 12", price: 199, BY: "EDUCART", rating: 4.7, image: "https://th.bing.com/th/id/OIP.-1hKbOto1_0Owgowz2x0FwHaK0?rs=1&pid=ImgDetMain" },
    { id: 5, name: "New SAT Practice Sheets with solutions", price: 999, BY: "IES", rating: 4.8, image: "https://product.hstatic.net/200000239353/product/es-1_c6220a85fcd3475cb9ff4730d10d21b4_aee97926d08b411ca40cafe2d1fa36f9_5304606af5204f4c9abdd07c2748e803_grande.jpg" },
    { id: 6, name: "JEE MAIN previous year question with answer keys", price: 699, BY: "STUDENTS", rating: 3.9, image: "https://cdn1.mathongo.com/wp-content/uploads/20190908125347/jee_main_2014_page_10-724x1024.jpg" },
    { id: 7, name: "NEET UG previous papers with answer", price: 559, BY: "AAKASH", rating: 4.3, image: "https://th.bing.com/th/id/OIP.VkXEKagnDpvqC65tWQR40QAAAA?rs=1&pid=ImgDetMain" },
    { id: 8, name: "UPSE previous year paper with solution", price: 99, BY: "STUDENTS", rating: 4.9, image: "https://upscgetwayias.com/wp-content/uploads/2022/11/Political-Science-PSIR-UPSC-Sample-Papers-2-scaled.jpg" },
    { id: 9, name: "GATE EXAM PATTERN + SAMPLE PAPER", price: 799, BY: "GATE", rating: 3.5, image: "https://www.successcds.net/wp-content/uploads/2023/09/gate-exam-pattern.jpeg" },
    { id: 10, name: "GATE physics solved papers", price: 499, BY: "GATE", rating: 4.0, image: "https://cdn.arihantbooks.com/assets/ProductImage/9789326195348.jpg" }
  ];
  
  // Variables
  const productGrid = document.getElementById("product-grid");
  const priceFilter = document.getElementById("price-filter");
  const priceValue = document.getElementById("price-value");
  const BYFilters = document.querySelectorAll(".BY-filter");
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
  
    // Filter by BY
    const selectedBYs = Array.from(BYFilters)
      .filter(filter => filter.checked)
      .map(filter => filter.value);
    if (selectedBYs.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedBYs.includes(product.BY));
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
          <p>BY: ${product.BY}</p>
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
  
  BYFilters.forEach(filter =>
    filter.addEventListener("change", filterAndSortProducts)
  );
  
  ratingFilters.forEach(filter =>
    filter.addEventListener("change", filterAndSortProducts)
  );
  
  sortBy.addEventListener("change", filterAndSortProducts);
  
  searchInput.addEventListener("input", filterAndSortProducts);
  
  // Initial Load
  filterAndSortProducts();
  