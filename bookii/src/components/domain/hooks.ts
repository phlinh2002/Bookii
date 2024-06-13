import {useState, useEffect, useCallback} from 'react';
import {Book, fetchBooks} from './books';

type FetchState = 'initial' | 'loading' | 'success' | 'error';

const useBooks =(): [Book[],FetchState,Error | null, () => void] =>{
    const [books, setBooks] = useState<Book[]>([]);
    const [state,setState] = useState<FetchState>('initial');
    const [error,setError] = useState<Error | null>(null);

    const fetchBooksData = useCallback(async()=>{
        setState('loading'); 
        setError(null);
        try{
                const data = await fetchBooks();
            
                setBooks(data);
                setState('success');
            
            /*setState('loading');
            const data = await fetchBooks();
            setBooks(data);
            setState('success');
            */
        }catch (error) {
                setError(error as Error);
                setState('error');
            
            /*setError(error);
            setState('error');
            */
        }
    },[]);
    const refresh =useCallback(() => {
        fetchBooksData();
    },[fetchBooksData]);
    useEffect(()=> {
        fetchBooksData();
        const interval = setInterval(refresh, 60000);
        return () => {
            clearInterval(interval);
        }
           
    },[fetchBooksData,refresh]);
    return [books,state,error,refresh]
};
export default useBooks;


