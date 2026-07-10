// Sample Product Data
const products = [
    { id: 1, name: "Relativity Albert Einstein Book", price: 999, brand: "CBSE", rating: 4.5, image: "https://5.imimg.com/data5/SELLER/Default/2022/2/MI/GN/UR/118981820/new-product-250x250.jpeg" },
    { id: 2, name: "Remedial Mathematics", price: 499, brand: "VAYU EDUCATION", rating: 4.2, image: "https://5.imimg.com/data5/SELLER/Default/2024/7/436760742/KR/HW/SB/4086800/a-textbook-of-remedial-mathematics-front-500x500.jpg" },
    { id: 3, name: "NCERT Class 11 History", price: 1499, brand: "NCERT", rating: 3.8, image: "https://rukminim2.flixcart.com/image/850/1000/jqidjm80/regionalbooks/e/p/z/ancient-india-class-11-old-ncert-history-textbook-original-imafcheats9zgcce.jpeg?q=20&crop=false" },
    { id: 4, name: "NCERT Science class 10 and 11 combo", price: 199, brand: "NCERT", rating: 4.7, image: "https://rukminim2.flixcart.com/image/850/1000/l0cr4i80/regionalbooks/x/3/u/ncert-textbook-science-books-set-for-class-9-and-10-english-original-imagc5qvmxc6mrmn.jpeg?q=20&crop=false" },
    { id: 5, name: "An introduction of Political Science", price: 299, brand: "OTHER", rating: 4.8, image: "https://cdn.img.gen.in/saradhi-books/30596/portfolio.jpg?height=200&biz=2596&meta=true" },
    { id: 6, name: "Botany", price: 499, brand: "OTHER", rating: 3.9, image: "https://staging.amitbookdepot.com/storage/photos/uploads/VDO1121.jpg" },
    { id: 7, name: "Accounting", price: 899, brand: "OTHER", rating: 4.3, image: "https://staging.amitbookdepot.com/storage/photos/uploads/N9bWvbU7ZEhb5cyY853IM4eBuDSx10XNjmrwMDv1.jpeg" },
    { id: 8, name: "NCERT Class 10 & 12", price: 499, brand: "NCERT", rating: 4.9, image: "https://5.imimg.com/data5/ANDROID/Default/2022/12/BK/HF/HY/161183780/product-jpeg-1000x1000.jpg" },
    { id: 9, name: "College books combo", price: 1499, brand: "COLLEGE", rating: 3.5, image: "https://th.bing.com/th/id/R.1173810dc1e74c7fc45c85417b44a3fa?rik=mEqIWBZcZDwZ1Q&riu=http%3a%2f%2fblog.fitnyc.edu%2fadmissions%2ffiles%2f2016%2f08%2ftextbooks.resized-1.jpg&ehk=sPZBhR%2bEmUqyOlyhsDGQx%2f8thTzrWTJ6nBiTgJ4D8Ts%3d&risl=&pid=ImgRaw&r=0" },
    { id: 10, name: "Python Crash Course", price: 399, brand: "COLLEGE", rating: 4.0, image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600469395i/55372030.jpg" }
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
  