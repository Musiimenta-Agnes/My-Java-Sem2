// Array to store books
let books = [];

// To track the book being edited (if any)
let editingIndex = null;

// Show the Add Book form (resets the form)
function showAddBookForm() {
    document.getElementById('bookForm').reset();
    editingIndex = null; // Reset any edit state
}

// Show all books in the "All Books" section
function showAllBooks() {
    const bookListContainer = document.getElementById('bookList');
    bookListContainer.innerHTML = ''; // Clear any previous book cards

    // Loop through the books array and display each book
    books.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('col-3', 'card', 'm-2');
        bookCard.innerHTML = `
            <img src="${book.coverImage}" class="card-img-top" alt="${book.name}">
            <div class="card-body">
                <h5 class="card-title">${book.name}</h5>
                <p class="card-text"><strong>Author:</strong> ${book.author}</p>
                <p class="card-text"><strong>ISBN:</strong> ${book.isbn}</p>
                <p class="card-text"><strong>Genre:</strong> ${book.genre}</p>
                <p class="card-text"><strong>Status:</strong> ${book.status}</p>
                <button class="btn btn-warning" onclick="editBook(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteBook(${index})">Delete</button>
            </div>
        `;
        bookListContainer.appendChild(bookCard);
    });
}

// Handle form submission (add new or edit an existing book)
function onFormSubmit(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const book = {
        name: document.getElementById('name').value,
        author: document.getElementById('author').value,
        isbn: document.getElementById('isbn').value,
        genre: document.getElementById('genre').value,
        status: document.getElementById('status').value,
        coverImage: URL.createObjectURL(document.getElementById('image').files[0])
    };

    // Check if we are editing an existing book
    if (editingIndex !== null) {
        books[editingIndex] = book; // Update the book at the given index
        editingIndex = null; // Reset the edit state
    } else {
        books.push(book); // Add new book to the array
    }

    // Refresh the list of books
    showAllBooks();

    // Reset the form
    document.getElementById('bookForm').reset();
}

// Edit a book (populate the form with the book data)
function editBook(index) {
    editingIndex = index; // Set the index of the book to edit

    // Populate the form with the book data
    const book = books[index];
    document.getElementById('name').value = book.name;
    document.getElementById('author').value = book.author;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('genre').value = book.genre;
    document.getElementById('status').value = book.status;
}


// Delete a book
function deleteBook(index) {
    if (confirm('Are you sure you want to delete this book?')) {
        books.splice(index, 1); // Remove the book from the array
        showAllBooks(); // Refresh the list of books
    }
}
