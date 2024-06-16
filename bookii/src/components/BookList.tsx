
import React, { useEffect} from "react";
import { BookItem } from "./BookItem";
import '../styles/appStyles.css';
import useBooks from "./domain/hooks";


const BookList: React.FC=()=> {
    const [
        books,
        state,
        error,
        refresh,
        setCurrentPage,
        currentPage,
        totalPages,
    ] = useBooks();

/*
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
    //const [books,state,error,refresh,goToNextPage,goToPrevPage,goToFirstPage,goToLastPage] = useBooks(1,10);
    



    useEffect(() => {
        refresh();
    }, [refresh]);

    if (state==='loading'){
        console.log("loading...");
        return <div className="state"> Loading....</div>
    }
    if(state==='error'){
        console.log("error");
        return <div className="state" id="errorLoading"> !!! Error loading books !!!</div>
    }
    if(state==='success'){
        console.log("success");
        return (
            <div>
                <div id="main_screen">
                <h2 id="header_bibliothek">Discover your Books</h2>
                    <div id="bookList">
                        {books.map((book, index) => (
                            <BookItem
                                key={index}
                                book={book}  
                            />
                            
                        ))}
                    </div>
                    <div className="pagination">
                        <nav>Page {currentPage} of {totalPages}</nav>
                        <div className="pagination-button">
                            <button onClick={()=>setCurrentPage(1)} >First</button>
                            <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1} > Prev </button>
                            <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
                            <button onClick={()=>setCurrentPage(totalPages)} >Last</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
        
    }
    return null;
};



export default BookList;
