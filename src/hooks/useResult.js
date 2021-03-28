import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'NYC'
                }
            });
            setResults(response.data.businesses);
        }
        catch (err) {
            setErrorMessage('Something Went Wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, [])

    // Never do this because it will run on every re-render / infinite loop 
    // searchApi('pasta')

    return [results, errorMessage, searchApi];
};

