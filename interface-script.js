function logout() {
    window.location.href = "index.html";
}

function searchBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('.book');
    
    books.forEach(book => {
        const title = book.querySelector('h3').textContent.toLowerCase();
        const author = book.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(input) || author.includes(input)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}
