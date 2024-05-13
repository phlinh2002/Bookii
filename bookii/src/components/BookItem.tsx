
import { Book } from "./domain/books";

export interface BookItemProps {
    book: Book;
    onLikeClick: () => void;
}

export function BookItem(p: BookItemProps) {

    return (
        <div className="book">
            <h3>{p.book.title}</h3>
            <div className="bookCover">
                {p.book.cover ? (
                    <img src={p.book.cover} alt={p.book.title} />
                ) : (
                    <p id="noImg">No image!</p>
                )}
            </div>
            <div className="like-button" onClick={p.onLikeClick}>
                <div className="heart"></div>
                <div className="like-popup">{p.book.likeCounter} Likes</div>
            </div>
            <div id="bookInfo">
                <p>ISBN: {p.book.isbn}</p>
                <p>Author: {p.book.author}</p>
                <p>Publisher: {p.book.publisher}</p>
                <p>Price: {p.book.price}</p>
            </div>
        </div>
    );
};


