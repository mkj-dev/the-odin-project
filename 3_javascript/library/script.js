// Library array
let myLibrary = [];

// Form modal
const formModal = document.getElementById('formModal');

// Close icon
const closeIcon = document.querySelector('.icon span');

// Buttons
const btnOpenModal = document.getElementById('openModal');
const btnAddBook = document.getElementById('addBook');

// Book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}