
import { Book } from "./domain/books";
import '../styles/appStyles.css';
import { LikeCounter } from "./LikeButton";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface BookItemProps {
    book: Book;

}

export function BookItem({ book}: BookItemProps) {
    const [bookLikes, setBookLikes] = useState(0); 

    const handleLikeClick = (newLikes: number) => {
        setBookLikes(newLikes);
    };

    return (
        <div className="book">
            <h3>{book.title}</h3>
            <Link to={`/book/${book.isbn}`}>
            <div className="bookCover">
                {book.cover ? (
                    <img src={book.cover} alt={book.title} />
                ) : (
                    <p id="noImg">No image!</p>
                )}
            </div>

            </Link>
            
            <LikeCounter  likes={bookLikes} onLikesChange={handleLikeClick}/>
            <div id="bookInfo">
                <p id ="bookPrice">{book.price}</p>
                <table>
                    <tr>
                        <td className="infoName">ISBN:</td>
                        <td>{book.isbn}</td>
                    </tr>
                    <tr>
                        <td className="infoName">Author:</td>
                        <td>{book.author}</td>
                    </tr>
                    <tr>
                        <td className="infoName">Publisher:</td>
                        <td>{book.publisher}</td>
                    </tr>
                </table>
            </div>

        </div>
    );
};


