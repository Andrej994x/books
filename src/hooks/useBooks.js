import { useState, useEffect } from 'react';

export const useBooks = () => {
    const [bookData, setBookData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('/DB/listofbooks.json');
            const data = await response.json();
            setBookData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return bookData;
};