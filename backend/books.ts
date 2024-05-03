 interface Book{
    title: string,
    subtitle: string,
    isbn: string,
    abstract: number,
    numPages: 123,
    author: string,
    publisher: string,
    price: number,
    cover: string,
}

//Fetch book from Bookmonkey server

async function fetchBooks(): Promise<Book[]> {
    try{
        const response = await fetch('http://localhost:4730/books')
        if(!response.ok){
            throw new Error('Failed to fetch book')
        }
        const books: Book[] = await response.json();
        return books;
        
    }catch (error){
        console.error('Error fetching books', error)
        return [];
    }
}

async function loadBooksOnDisplay(){
    const books = await fetchBooks();
    const bookList = document.getElementById('bookList');
    if(!bookList) return;
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h3');
        title.innerHTML = `<em>${book.title}</em>`;
        bookDiv.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const publisher = document.createElement('p');
        publisher.textContent = `Publisher: ${book.publisher}`;
        bookDiv.appendChild(publisher);

        const price = document.createElement('p');
        price.textContent = `Price: ${book.price}`;
        bookDiv.appendChild(price);

        if (book.cover) {
            const coverImage = document.createElement('img');
            coverImage.src = book.cover;
            coverImage.alt = 'Book Cover';
            bookDiv.appendChild(coverImage);
        } else {
            const noImage = document.createElement('p');
            noImage.textContent = 'No image!';
            bookDiv.appendChild(noImage);
        }
        bookList.appendChild(bookDiv);

    });

}
document.addEventListener("DOMContentLoaded", (event:Event)=>loadBooksOnDisplay());