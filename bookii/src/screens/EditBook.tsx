import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Book } from '../components/domain/books';
import AppHeader from '../components/AppHeader';
import MenuBars from '../components/MenuBars';
import AppFooter from '../components/AppFooter';
import '../styles/BookDetail.css'

const EditBookScreen: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


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
            } catch (error) {
                setError("Error: " + error);
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (book) {
            setBook({ ...book, [name]: value });
        }

    };
 
    const handleSave = async () => {
        try {

            const response = await fetch(`http://localhost:4730/books/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });
            if (!response.ok) {
                throw new Error('Failed to update book');
            } else {
                setTimeout(() => {
                    alert('Saved changes');
                    navigate(`/book/${id}`);
                }, 500);


            }

        } catch (error) {
            setError("Error " + error);
        }
    };

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
        <div>
            <AppHeader />
            <MenuBars onLogout={()=>{}}  />
            <div className='detailsBoard'>
                <h2 id="editscreen-title">Edit Book</h2>
                <div >
                    <img src={book.cover} alt="Book Cover" />
                </div>
                <table className='detailsList'>
                    <tr>
                        <td className='infoName'>Title:</td>
                        <td className='input-change'>
                            <textarea name="title" value={book.title} onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Subtitle:</td>
                        <td className='input-change'>
                            <textarea name="subtitle" value={book.subtitle} onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>ISBN:</td>
                        <td className='input-change' id='isbn'>
                            <textarea name="isbn" value={book.isbn} onChange={handleInputChange} required/>
                            
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Number of pages:</td>
                        <td className='input-change'>
                            <textarea name="numPages" value={book.numPages} onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Abstract:</td>
                        <td className='input-change'>
                            <textarea name="abtract" value={book.abstract} onChange={handleInputChange} required/>
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Author:</td>
                        <td className='input-change'>
                            <textarea name="author" value={book.author} onChange={handleInputChange} required />
                        </td>
                    </tr>

                    <tr>
                        <td className='infoName'>Publisher:</td>
                        <td className='input-change'>
                            <textarea name="publisher" value={book.publisher} onChange={handleInputChange}  required/>
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Price: </td>
                        <td className='input-change'>
                            <textarea name="price" value={book.price} onChange={handleInputChange} required/>
                        </td>
                    </tr>
                    
                </table>
                <div className='save-change-button'>
                        <button type="submit" onClick={handleSave}>Save</button>
                        
                        <Link to={`/book/${book.id}`}>
                            <button type="button">Cancel</button>
                        </Link>
                    
                    </div>
            </div >
            <AppFooter />
        </div >
    );
};

export default EditBookScreen;
