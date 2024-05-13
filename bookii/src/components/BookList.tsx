
import React, { useEffect, useState } from "react";
import { BookItem } from "./BookItem";
import { Book } from "./domain/books";
import { bookArray, fetchBooks } from "./domain/books";


export function BookList() {
    const [books, setBooks] = useState<Book[]>([]);


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

    }, []);
    const handleLikeClick = (index: number) => {
        const updatedBooks = [...bookArray];
        updatedBooks[index].likeCounter++;
        setBooks(updatedBooks);
    };

    return (
        <div>
            <h2 id="header_bibliothek">Discover your Books</h2>
            <div id="main_screen">
                <div id="bookList">
                    {bookArray.map((book, index) => (
                        <BookItem
                            key={index}
                            book={book}
                            onLikeClick={() => handleLikeClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


