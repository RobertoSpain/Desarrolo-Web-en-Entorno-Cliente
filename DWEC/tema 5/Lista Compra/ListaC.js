const form = document.getElementById('grocery-form');
const input = document.getElementById('grocery-input');
const list = document.getElementById('grocery-list');
const container = document.getElementById('grocery-container');
const clearBtn = document.getElementById('clear-btn');

let editElement = null;

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (value && !editElement) {
    addItem(value);
    showContainer();
    input.value = '';
  } else if (value && editElement) {
    editElement.querySelector('span').textContent = value;
    editElement = null;
    input.value = '';
    document.getElementById('submit-btn').textContent = 'Submit';
  }
});

// Add item to the list
function addItem(value) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${value}</span>
    <div>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;
  list.appendChild(li);

  // Handle edit
  li.querySelector('.edit-btn').addEventListener('click', () => editItem(li));

  // Handle delete
  li.querySelector('.delete-btn').addEventListener('click', () => deleteItem(li));
}

// Edit item
function editItem(item) {
  input.value = item.querySelector('span').textContent;
  editElement = item;
  document.getElementById('submit-btn').textContent = 'Edit';
}

// Delete item
function deleteItem(item) {
  list.removeChild(item);
  if (!list.children.length) hideContainer();
}

// Show container
function showContainer() {
  container.style.display = 'block';
}

// Hide container
function hideContainer() {
  container.style.display = 'none';
}

// Clear all items
clearBtn.addEventListener('click', () => {
  list.innerHTML = '';
  hideContainer();
});
