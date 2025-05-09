// Function to read the present movies and add more movies in the list

const available_books = document.getElementById('list');

//Creating a new movie

const newMovie = document.createElement('li');
newMovie.textContent = 'The walking dead'

// Add the new movie to the list

available_books.appendChild(newMovie);



const bookForm = document.getElementById("bookForm");
const bookInput = document.getElementById("bookInput");
const bookList = document.getElementById("bookList");

// Load books when the page is ready
document.addEventListener("DOMContentLoaded", loadBooks);

// Handle form submission
bookForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const title = bookInput.value.trim();
  if (title !== "") {
    const book = { title };
    saveBook(book);
    addBookToDOM(book);
    bookInput.value = ""; // clear input field
  }
});

// Save a book to localStorage
function saveBook(book) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}

// Load books from localStorage and add them to the list
function loadBooks() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.forEach(addBookToDOM);
}

// Add a single book to the page
function addBookToDOM(book) {
  const li = document.createElement("li");
  li.textContent = book.title;
  bookList.appendChild(li);
}
