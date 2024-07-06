export interface Book {
    id:number,
    title: string,
    subtitle: string,
    isbn: string,
    abstract: string,
    numPages: number,
    author: string,
    publisher: string,
    price: string,
    cover: string,
    userId: number;
}
const booksToAdd: Book[] = [
    {
        id:1234567890,
        title: "Book 1",
        subtitle: "Subtitle 1",
        isbn: "1234567890",
        abstract: "Abstract for Book 1",
        numPages: 200,
        author: "Author 1",
        publisher: "Publisher A",
        price: "19.99",
        cover: "",
        userId: 1
    },
    {
        id: 900,
        title: "Book 2",
        subtitle: "Subtitle 2",
        isbn: "0900",
        abstract: "Abstract for Book 2",
        numPages: 250,
        author: "Author 2",
        publisher: "Publisher B",
        price: "24.99",
        cover: "",
        userId: 1
    },
    {
        id:98,
        title: "Book 3",
        subtitle: "Subtitle 3",
        isbn: "098",
        abstract: "Abstract for Book 3",
        numPages: 290,
        author: "Author ",
        publisher: "Publisher ",
        price: "12.99",
        cover: "",
        userId: 2
    }
];

export async function fetchBooks(page:number,limit:number=10): Promise<Book[]> {
    try {
        const response = await fetch(`http://localhost:4730/books?_page=${page}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch book')
        }
        
        
        const books =  await response.json();
        
        return books;
    } catch (error) {
        console.error('Error fetching books', error);
        throw error;
    }
}
addBooks(booksToAdd);
let allBooks: Book[] =[];
export async function fetchBooksAll():Promise<Book[]>{
    try {
        const response = await fetch('http://localhost:4730/books');
        if (!response.ok) {
            throw new Error('Failed to fetch book')
        }
        allBooks = await response.json();
        return allBooks;
    } catch (error) {
        console.error('Error fetching books', error);
        throw error;
    }
}

export async function addBooks(books:Book[]): Promise<void> {
    try {
        await Promise.all(books.map(book => {
            return fetch('http://localhost:4730/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });
        }));

        console.log('Books added successfully');
    } catch (error) {
        console.error('Error adding books:', error);
        throw error;
    }
}





