import {useState, useEffect} from 'react';
import {Book, fetchBooks} from './books';

type FetchState = 'initial' | 'loading' | 'success' | 'error';

const useBooks =(): [Book[],FetchState,Error | null, () => void] =>{
    const [books, setBooks] = useState<Book[]>([]);
    const [state,setState] = useState<FetchState>('initial');
    const [error,setError] = useState<Error | null>(null);

    const fetchBooksData = async()=>{
        try{
            setState('loading');
            const data = await fetchBooks();
            setBooks(data);
            setState('success');
        }catch (error:any) {
            setError(error);
            setState('error');
        }
    };
    const refresh = () => {
        fetchBooksData();
    };
    useEffect(()=> {
        fetchBooksData();

        const interval = setInterval(fetchBooksData, 60000,Date.now());
        return () => clearInterval(interval);
    },[]);
    return [books,state,error,refresh]
};
export default useBooks;


