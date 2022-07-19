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
    library.innerHTML = '';
    myLibrary.forEach(book => {
        library.innerHTML += 'Book title : ' + book.title + '<span class="icon">&times;</span>' + '<br>'; 
        library.innerHTML += 'Book author: ' + book.author + '<br>'; 
        library.innerHTML += 'Number of pages: ' + book.pages + '<br>'; 
        library.innerHTML += 'Is the book read?: ' + book.isRead + '<br><hr>'; 
    });

    // Books node list
    const booksToRemove = document.querySelectorAll('div#library .icon');

    // Delete book from node list
    booksToRemove.forEach(book => {
        book.addEventListener('click', () => {
            for (let i = 0; i < myLibrary.length; i++) {
                myLibrary.splice(i,1);
            }
        });
    });
});