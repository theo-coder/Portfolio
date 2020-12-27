import { useEffect, useState } from 'react'
import github from '../api/github'

const Res = () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try{
            const response = await github.get('/users/theo-coder/repos')
            setResults(response.data)
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi();
    }, [])

    return [results, errorMessage];
}

export default Res;