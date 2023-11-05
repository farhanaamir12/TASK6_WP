document.addEventListener('DOMContentLoaded', () => {
    // Sample data for demonstration
    const books = [
        { title: 'Articial intelligence', author: 'Mark Twain', isbn: '2112233445678' },
        { title: 'Programing', author: 'Marjin Havebrek', isbn: '2345678901' },
    ];

    const bookList = document.getElementById('book-list');
    const addBookForm = document.getElementById('add-book-form');

    function displayBookList() {
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${book.title}</strong> by ${book.author} (ISBN: ${book.isbn})`;
            bookList.appendChild(li);
        });
    }

    function addBook(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        if (books.some(book => book.isbn === isbn)) {
            alert('Book with the same ISBN already exists.');
            return;
        }

        books.push({ title, author, isbn });
        displayBookList();
        addBookForm.reset();
    }

    function searchBooks() {
        const query = document.getElementById('search-query').value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBookList(filteredBooks);
    }    

    displayBookList();
    addBookForm.addEventListener('submit', addBook);
    window.searchBooks = searchBooks;
});
