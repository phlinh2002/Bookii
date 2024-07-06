import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Book, addBooks } from '../components/domain/books';
import AppHeader from '../components/AppHeader';
import MenuBars from '../components/MenuBars';
import AppFooter from '../components/AppFooter';
import '../styles/BookDetail.css'

const AddBookScreen: React.FC = () => {
    const navigate = useNavigate();

    const initialBookState: Book = {
        id: 0,
        title: '',
        subtitle: '',
        isbn: '',
        abstract: '',
        numPages: 0,
        author: '',
        publisher: '',
        price: '',
        cover: '',
        userId: 1,
    };

    const [book, setBook] = useState<Book>(initialBookState);
    const [error, setError] = useState<string | null>(null);
    const [formError, setFormError] = useState<{ [key: string]: string }>({});


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (book) {
            setBook({ ...book, [name]: value });
        }

    };
    const validateForm = () => {
        let valid = true;
        const errors: { [key: string]: string } = {};

        if (!book.title.trim()) {
            errors.title = 'Title is required';
            valid = false;
            setError(errors.title)
        }
        if (!book.isbn.trim()) {
            errors.isbn = 'ISBN is required';
            valid = false;
            setError(errors.isbn)
        }
        if (!book.price.trim()) {
            errors.price = 'Price must be a valid number';
            valid = false;
        }
        if (!book.numPages || book.numPages <= 0) {
            errors.numPages = 'Number of pages must be greater than 0';
            valid = false;
            setError(errors.numPages)
        }
        if (isNaN(Number(book.numPages))) {
            errors.price = 'Number of pages must be a valid number';
            valid = false;
        }
        if (!book.author.trim()) {
            errors.author = 'Author is required';
            valid = false;
            setError(errors.author)
        }
        if (!book.publisher.trim()) {
            errors.publisher = 'Publisher is required';
            valid = false;
            setError(errors.publisher)
        }
        setFormError(errors);
        
        return valid;
    };


    const handleSave = async () => {
        try {
            if (!validateForm()) {
                return;
            }
           
            await addBooks([book]);
            alert('Book added successfully');
            navigate(`/book/${book.isbn}`);

        } catch (error) {
            setError("Failed to create Book " + error);
            alert("Failed to create Book");
            console.error("Error adding book:", error);
        }
    };


    const handleImageError = () => {

        console.log('Failed to load image');
    };

    return (
        <div>
            <AppHeader />
            <MenuBars onLogout={()=>{}}  />
            <div className='detailsBoard'>
                <h2 id="editscreen-title">Add Book</h2>
                <table className='detailsList'>
                    <tr>
                        <td className='infoName'>Cover:</td>
                        <td className='input-change'>
                            <textarea
                                name="cover"

                                onChange={handleInputChange}
                                placeholder="Enter cover image URL"
                            />
                            {book.cover && (
                                <img
                                    src={book.cover}
                                    alt="Book Cover"
                                    onError={handleImageError}
                                    style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}
                                />
                            )}

                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Title:</td>
                        <td className='input-change'>
                            <textarea name="title" placeholder="Enter title" onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Subtitle:</td>
                        <td className='input-change'>
                            <textarea name="subtitle" placeholder="Enter Subtitle" onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>ISBN:</td>
                        <td className='input-change' id='isbn'>
                            <textarea name="isbn" placeholder="Enter ISBN" onChange={handleInputChange} required />

                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Number of pages:</td>
                        <td className='input-change'>
                            <textarea name="numPages" placeholder="Enter number of pages" onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Abstract:</td>
                        <td className='input-change'>
                            <textarea name="abstract" placeholder="Enter abstract" onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Author:</td>
                        <td className='input-change'>
                            <textarea name="author" placeholder="Enter author" onChange={handleInputChange} required />
                        </td>
                    </tr>

                    <tr>
                        <td className='infoName'>Publisher:</td>
                        <td className='input-change'>
                            <textarea name="publisher" placeholder='Enter Publisher' onChange={handleInputChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td className='infoName'>Price: </td>
                        <td className='input-change'>
                            <textarea name="price" value={book.price} onChange={handleInputChange} required />
                        </td>
                    </tr>

                </table>
                <div className='save-change-button'>
                    <button type="submit" onClick={handleSave}>Save</button>
                    <Link to={`/booklist`}>
                        <button type="button">Cancel</button>
                    </Link>
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div >
            <AppFooter />
        </div >
    );
};

export default AddBookScreen;
