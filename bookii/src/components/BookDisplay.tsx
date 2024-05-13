/*import React, {useEffect,useState} from "react";
import '../styles.css';
import {Book,fetchBooks,addBooks} from './domain/books' 

const BookComponent: React.FC = () =>{
    const[books,setBooks] = useState<Book[]>([]);
    useEffect(()=>{
        const loadBooks = async ()=>{
            try{
                const fetchedBooks = await fetchBooks();
                const bookWithLikeCounters = fetchedBooks.map(book=>({...book,likeCounter:0}));
                setBooks(bookWithLikeCounters);
                await addBooks();
            }catch(error){
                console.error('Error loading books', error);
            }
        };
        loadBooks();
    },[]);
    const handleLikeClick = (index:number)=>{
        const updatedBooks = [...books];
        updatedBooks[index].likeCounter++;
        setBooks(updatedBooks);
    };
    return (
        <div>
            <h2 id="header_bibliothek"> Discover your Books</h2>
            <div id = "main_screen">
                <div id="bookList">
                {books.map((book, index) => (
                    <div className="book" key={index}>
                        <h3>{book.title}</h3>
                        <div className = "bookCover">
                        {book.cover ? (
                                    <img src={book.cover} alt={book.title} />
                                ) : (
                                    <p id="noImg">No image!</p>
                                )}
                        </div>
                        <div className="like-button" onClick={() => handleLikeClick(index)}>
                            <div className="heart"></div>
                            <div className="like-popup">{book.likeCounter} Likes</div>
                        </div>
                        <div id ="bookInfo">
                        <p>ISBN: {book.isbn}</p>
                        <p>Author: {book.author}</p>
                        <p>Publisher: {book.publisher}</p>
                        <p>Price: {book.price}</p>
                        </div>
                    </div>
                ))}

                </div>
                
            </div>
        </div>
    );
}
export default BookComponent;
*/