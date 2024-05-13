export interface Book {
    title: string,
    subtitle: string,
    isbn: string,
    abstract: string,
    numPages: number,
    author: string,
    publisher: string,
    price: number,
    cover: string,
    likeCounter: number;
    userId: number;
}
let bookArray: Book[] = [];
export async function fetchBooks(): Promise<void> {
    try {
        const response = await fetch('http://localhost:4730/books')
        if (!response.ok) {
            throw new Error('Failed to fetch book')
        }
        const books: Book[] = await response.json();
        addBooks();
        const booksWithInitialLikes = books.map(book => ({ ...book, likeCounter: 0 }));
        bookArray = booksWithInitialLikes;
    } catch (error) {
        console.error('Error fetching books', error)
    }
}

export async function addBooks(): Promise<void> {
    try {

        const booksToAdd: Book[] = [
            {
                title: "Book 1",
                subtitle: "Subtitle 1",
                isbn: "1234567890",
                abstract: "Abstract for Book 1",
                numPages: 200,
                author: "Author 1",
                publisher: "Publisher A",
                price: 19.99,
                cover: "",
                likeCounter: 0,
                userId: 1
            },
            {
                title: "Book 2",
                subtitle: "Subtitle 2",
                isbn: "0987654321",
                abstract: "Abstract for Book 2",
                numPages: 250,
                author: "Author 2",
                publisher: "Publisher B",
                price: 24.99,
                cover: "",
                likeCounter: 0,
                userId: 1
            },
            {
                title: "Book 3",
                subtitle: "Subtitle 3",
                isbn: "0987654321333",
                abstract: "Abstract for Book 3",
                numPages: 290,
                author: "Author ",
                publisher: "Publisher ",
                price: 12.99,
                cover: "",
                likeCounter: 0,
                userId: 2
            }
        ];
        bookArray.push(...booksToAdd);

        await Promise.all(booksToAdd.map(book => {
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


export { bookArray }


