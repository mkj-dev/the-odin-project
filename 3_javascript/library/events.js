// Events
btnOpenModal.addEventListener('click', () => {
    formModal.style.display = 'block';
    btnOpenModal.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    formModal.style.display = 'none';
    btnOpenModal.style.display = 'block';
});

// Add new book object
btnAddBook.addEventListener('click', () => {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked);
    myLibrary.push(newBook);
    console.log(newBook);
})