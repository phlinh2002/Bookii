
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../components/domain/books';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import '../styles/BookDetail.css'
import MenuBars from '../components/MenuBars';


const BookDetailScreen: React.FC = () => {
    const { isbn } = useParams<{ isbn: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`http://localhost:4730/books/${isbn}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch book details');
                }
                const data = await response.json();
                setBook(data);
                setLoading(false);
            } catch (err) {
                setError("Can not find book details");
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [isbn]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div >
            <AppHeader />
            <MenuBars/>

            <div className='detailsBoard'>
            
                <h2>{book.title}</h2>
                <div >
                    <img src={book.cover} alt="Book Cover" />
                </div>
                <table className='detailsList'>
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
                    <tr>
                        <td className="infoName">Abstract:</td>
                        <td>{book.abstract}</td>
                    </tr>
                    <tr>
                        <td className="infoName">Number of Pages:</td>
                        <td>{book.numPages}</td>
                    </tr>
                    <tr>
                        <td className="infoName">Price</td>
                        <td>{book.price}</td>
                    </tr>

                </table>


            </div>



            <AppFooter />
        </div>
    );
};

export default BookDetailScreen;
