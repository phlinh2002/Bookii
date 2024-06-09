
import React, { useEffect, useState } from "react";
import { BookItem } from "./BookItem";
//import { Book, addBooks } from "./domain/books";
import { bookArray, fetchBooks } from "./domain/books";
import '../styles/appStyles.css';
import useBooks from "./domain/hooks";


export function BookList() {
    /*const [books, setBooks] = useState<Book[]>([]);


    useEffect(() => {
        const loadBooks = async () => {
            try {
                await fetchBooks();
                setBooks(bookArray);
            } catch (error) {
                console.error("Error loading books", error);
            }
        };
        loadBooks();

    }, []);*/
    const [books,state,error,refresh] = useBooks();


    if (state==='loading'){
        console.log("loading...");
        return <div> Loading....</div>
    }
    if(state==='error'){
        console.log("error");
        return <div> Error loading books...</div>
    }

    return (
        <div>
            <h2 id="header_bibliothek">Discover your Books</h2>
            <div id="main_screen">
                <div id="bookList">
                    {bookArray.map((book, index) => (
                        <BookItem
                            key={index}
                            book={book}  
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};




