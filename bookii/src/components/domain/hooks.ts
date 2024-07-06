import { useState, useEffect, useCallback } from 'react';
import { Book, fetchBooks, fetchBooksAll } from './books';

type FetchState = 'initial' | 'loading' | 'success' | 'error';

const useBooks = (limit: number = 10): [Book[], FetchState, Error | null, () => void, (page: number) => void, number, number] => {
    const [books, setBooks] = useState<Book[]>([]);
    const [state, setState] = useState<FetchState>('initial');
    const [error, setError] = useState<Error | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchBooksData = useCallback(async () => {
        setState('loading');
        setError(null);
        try {
            const data = await fetchBooks(currentPage, limit);

            setBooks(data);
            if (currentPage === 1) {
                const allBooks = await fetchBooksAll();
                setTotalPages(Math.ceil(allBooks.length / limit));
            }
            setState('success');
        } catch (error) {
            setError(error as Error);
            setState('error');
        }

    }, [currentPage, limit]);



    const refresh = useCallback(() => {
        fetchBooksData();
    }, [fetchBooksData]);

    useEffect(() => {

        fetchBooksData();
        const interval = setInterval(refresh, 60000);
        return () => {
            clearInterval(interval);
        }

    }, [fetchBooksData, refresh]);
    return [books, state, error, refresh, setCurrentPage, currentPage, totalPages]
};
export default useBooks;


