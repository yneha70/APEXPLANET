// To-Do List Functionality
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  displayProducts(products);
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task) {
    saveTask(task);
    taskInput.value = "";
    displayTask(task);
  }
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(displayTask);
}

function displayTask(task) {
  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById("taskList").appendChild(li);
}

// Product Listing Functionality
const products = [
  { name: "Smartphone", category: "electronics", price: 500, rating: 4.5 },
  { name: "T-shirt", category: "clothing", price: 20, rating: 4.0 },
  { name: "Laptop", category: "electronics", price: 1200, rating: 4.8 },
  { name: "Jacket", category: "clothing", price: 80, rating: 4.2 },
];

function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  items.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>`;
    productList.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  let filtered = products;
  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
  }
  displayProducts(filtered);
}

function sortProducts() {
  const option = document.getElementById("sortOption").value;
  let sorted = [...products];
  if (option === "price") sorted.sort((a, b) => a.price - b.price);
  if (option === "rating") sorted.sort((a, b) => b.rating - a.rating);
  displayProducts(sorted);
}
