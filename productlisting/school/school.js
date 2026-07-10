// Sample Product Data
const products = [
    { id: 1, name: "Oswaal NCERT One For All Book for UPSC and State PSC's History Classes 6 to 12 (Old and New NCERT Edition) (For 2024 Exam)", price: 579, brand: "OSWAAL", rating: 4.5, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/d/e/3/oswaal-ncert-one-for-all-book-for-upsc-and-state-psc-s-history-original-imah5htdgq3fyfvh.jpeg?q=70&crop=false" },
    { id: 2, name: "NCERT Science Books Syllabus (PCB) SET Physics Part 1 & 2 Chemstry and Biology Textbook CLASS 12 (ENGLISH MEDIUM) 2024 NEW EDITION SCHOOL BOARD EXAMINATION INDIA ( HARDCOVER )  (Paperback, K.MURALIDHAR)", price: 720, brand: "NCERT", rating: 4.2, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/e/h/a/ncert-science-books-syllabus-pcb-set-physics-part-1-2-chemstry-original-imah3wu7jaawsajn.jpeg?q=70&crop=false" },
    { id: 3, name: "Physical Education Class 12 CBSE 2023-24  (English, Paperback, Zaki Saudagar)", price: 299, brand: "CBSE", rating: 3.8, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/0/w/2/physical-education-class-12-cbse-2023-24-original-imags7w2fencx8cx.jpeg?q=70&crop=false" },
    { id: 4, name: "NCERT Science SET OF 10 BOOKS (PCB ) Latest Physics part i & ii , Chemistry, Biology CLASS 11 AND 12 , English Medium , NEW EDITION (2023-2024 )", price: 1599, brand: "NCERT", rating: 4.7, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/p/s/j/ncert-science-set-of-10-books-pcb-latest-physics-part-i-ii-original-imah4d8cg5rnh3tg.jpeg?q=70&crop=false" },
    { id: 5, name: "All In One Mathematics CBSE Class 9th Based On Latest NCERT For CBSE Exams 2025", price: 263, brand: "ALL IN ONE", rating: 4.8, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/j/a/0/arihant-all-in-one-mathematics-cbse-9th-class-original-imagznjyczjy6bfg.jpeg?q=70&crop=false" },
    { id: 6, name: "All In One Mathematics CBSE Kasha 10th Based On Latest NCERT For CBSE Exams 2025", price: 999, brand: "ALL IN ONE", rating: 3.9, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/x/6/f/arihant-all-in-one-mathematics-cbse-class-10-for-2025-exams-original-imahy7n28y4ke9pp.jpeg?q=70&crop=false" },
    { id: 7, name: "NCERT Simplified Series History Notes Class 6-12 (New) For UPSC, State PSC And Other Competitive Exams 2025", price: 338, brand: "StudyIQ", rating: 4.3, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/regionalbooks/o/z/u/ncert-simplified-series-history-notes-class-6-12-new-for-upsc-original-imagshhj4hxsyynr.jpeg?q=70&crop=false" },
    { id: 8, name: "NCERT SCIENCE Bhautik, part 1 & 2 Rasayan, and Jeev Vigyan, CLASS 12 (PCB HINDI) SET OF 5 BOOKS , 2024 NEW EDITION SCHOOL BOARD EXAMINATION, INDIA", price: 732, brand: "NCERT", rating: 4.9, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/a/h/w/pcb-class-12-hindi-set-original-imah2na4cfxjchzz.jpeg?q=70&crop=false" },
    { id: 9, name: "Parikshit NCERT Exemplar Class 12th Mastering Mathematics ", price: 314, brand: "PARIKSHIT", rating: 3.5, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/a/n/b/parikshit-ncert-exemplar-class-12th-mastering-mathematics-original-imah6mh63gdhbnc2.jpeg?q=70&crop=false" },
    { id: 10, name: "Oswaal CBSE & NCERT One for All | Class 12 Mathematics For 2025 Board Exam", price: 861, brand: "OSWAAL", rating: 4.0, image: "https://rukminim2.flixcart.com/image/832/832/xif0q/book/s/4/d/oswaal-cbse-ncert-one-for-all-class-12-mathematics-for-2025-original-imahfhuzg6ebs6n5.jpeg?q=70&crop=false" }
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
  