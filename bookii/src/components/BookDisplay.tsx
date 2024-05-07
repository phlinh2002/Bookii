import React, {useEffect,useState} from "react";
import '../styles.css';
import {Book,fetchBooks,loadBooksOnDisplay} from './domain/books' 

const BookComponent: React.FC = () =>{
    const[books,setBooks] = useState<Book[]>([]);
    useEffect(()=>{
        const loadBooks = async ()=>{
            try{
                const fetchedBooks = await fetchBooks();
                setBooks(fetchedBooks);
            }catch(error){
                console.error('Error loading books', error);
            }
        };
        loadBooks();
    },[]);
    return (
        <div>
            <h2 id="header_bibliothek"> Discover your Books</h2>
            <div id = "main_screen">
                <div id="bookList">
                {books.map((book, index) => (
                    <div className="book" key={index}>
                        <h3>{book.title}</h3>
                        {book.cover && <img src={book.cover} alt="Book Cover" />}
                        <p>ISBN: {book.isbn}</p>
                        <p>Author: {book.author}</p>
                        <p>Publisher: {book.publisher}</p>
                        <p>Price: {book.price}</p>
                        
                    </div>
                ))}

                </div>
                
            </div>
        </div>
    );
}
export default BookComponent;