// JavaScript to handle interactive features like filters, search, etc.

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");
    const orderContainers = document.querySelectorAll(".orderContainer");
  
    // Search Functionality
    searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value.toLowerCase();
      orderContainers.forEach((order) => {
        const orderText = order.textContent.toLowerCase();
        if (orderText.includes(searchTerm)) {
          order.style.display = "block";
        } else {
          order.style.display = "none";
        }
      });
    });
  
    // Filter Functionality
    const filters = document.querySelectorAll("#filtersBox input");
    filters.forEach((filter) => {
      filter.addEventListener("change", () => {
        const activeFilters = Array.from(filters)
          .filter((f) => f.checked)
          .map((f) => f.nextElementSibling.textContent.toLowerCase());
  
        orderContainers.forEach((order) => {
          const orderText = order.textContent.toLowerCase();
          const matchesFilter = activeFilters.some((filter) =>
            orderText.includes(filter)
          );
  
          if (matchesFilter || activeFilters.length === 0) {
            order.style.display = "block";
          } else {
            order.style.display = "none";
          }
        });
      });
    });
  });
  