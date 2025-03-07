
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Book } from '../components/domain/books';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import '../styles/BookDetail.css'
import MenuBars from '../components/MenuBars';
import { useSelector } from 'react-redux';
import { RootState } from '../components/store/store';



const BookDetailScreen: React.FC=() => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    const role =useSelector((state: RootState)=>state.user.role)
    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`http://localhost:4730/books/${id}`);
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
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }

    const back=()=>{
        navigate("/booklist")
    }

    const handleDelete = async () => {
        try {

            const response = await fetch(`http://localhost:4730/books/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });
            if (!response.ok) {
                throw new Error('Failed to delete book');
            } else {
                setTimeout(() => {
                    alert('Deleted');
                    navigate(`/booklist`);
                }, 500);
            }

        } catch (error) {
            setError("Error " + error);
        }
    };

    return (
        <div >
            <AppHeader />
            <MenuBars onLogout={()=>navigate('/')} />

            <div className='detailsBoard'>

                <h2>{book.title}</h2>
                <div className='bookCover' >
                    <img src={book.cover} alt="No Image" />
                </div>
                <table className='detailsList'>
                    <tr>
                        <td className='infoName'>ID:</td>
                        <td>{book.id}</td>
                    </tr>

                    <tr>
                        <td className="infoName">ISBN:</td>
                        <td >{book.isbn}
                        </td>

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
                        <td className="infoName">Price: </td>
                        <td>{book.price}</td>
                    </tr>
                    <tr>
                        <td className='infoName'>User ID:</td>
                        <td>{book.userId}</td>
                    </tr>

                </table>
                {role === 'admin' ? (
                        <>
                             <div className='button-container'>
                    <Link to={`/book/${book.id}/edit`}>
                        <button id="edit-delete-button">Edit</button>
                    </Link>
                    <button id='edit-delete-button' onClick={handleDelete}>Delete</button>
                </div>
                        </>
                    ) : (
                        <>
                             <button id='edit-delete-button' onClick={back}>Back</button>

                        </>
                    )}
               
            </div>
            <AppFooter />
        </div>
    );
};
export default BookDetailScreen;
