// Library
let myLibrary = [];

// Form modal
const formModal = document.getElementById('formModal');

// Close icon
const closeIcon = document.querySelector('.icon span');

// Book info
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookPages = document.getElementById('bookPages');
const isRead = document.getElementById('isRead');

// Book info display
const library = document.getElementById('library');
const title = document.createElement('h3');
const author = document.createElement('h4');
const pages = document.createElement('p');
const read = document.createElement('p');
const hr = document.createElement('hr');


// Buttons
const btnOpenModal = document.getElementById('openModal');
const btnShowLibrary = document.getElementById('showLibrary');
const btnAddBook = document.getElementById('addBook');

// Book constructor
// function Book(title, author, pages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
// }

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}