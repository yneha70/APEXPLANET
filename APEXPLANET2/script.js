// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const successMessage = document.getElementById('successMessage');

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Show success message
  successMessage.style.display = 'block';

  // Hide it again after 3 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);

  // Reset form fields
  document.getElementById('contactForm').reset();
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">Delete</button>`;
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
