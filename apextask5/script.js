// Product Data
const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: "$499", image: "images/smartphone.jpg"
 },
  { id: 2, name: "Headphones", category: "electronics", price: "$199", image: "images/headphones.jpg" },
  { id: 3, name: "T-shirt", category: "fashion", price: "$29", image: "images/t shirt.jpg" },
  { id: 4, name: "Sneakers", category: "fashion", price: "$89", image: "images/sneakers.jpg" }
];

const productGrid = document.getElementById('productGrid');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

// Lazy loading with IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

function renderProducts() {
  productGrid.innerHTML = '';
  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchValue);
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img data-src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <span>${product.price}</span>
    `;
    productGrid.appendChild(card);

    const img = card.querySelector('img');
    observer.observe(img);
  });
}

// Event Listeners
categoryFilter.addEventListener('change', renderProducts);
searchInput.addEventListener('input', renderProducts);

// Initial render
renderProducts();
