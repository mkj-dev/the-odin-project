// Events
btnOpenModal.addEventListener('click', () => {
    formModal.style.display = 'block';
    btnOpenModal.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    formModal.style.display = 'none';
    btnOpenModal.style.display = 'inline-block';
});

// Add new book object
btnAddBook.addEventListener('click', () => {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked);
    myLibrary.push(newBook);
    console.log(myLibrary);
})

// Show library array
btnShowLibrary.addEventListener('click', () => {
    myLibrary.forEach(book => {
        // console.log(book);
        library.innerHTML += 'Book title : ' + book.title + '<br>'; 
        library.innerHTML += 'Book author: ' + book.author + '<br>'; 
        library.innerHTML += 'Number of pages: ' + book.pages + '<br>'; 
        library.innerHTML += 'Is the book read?: ' + book.isRead + '<br><hr>'; 
    });
});
