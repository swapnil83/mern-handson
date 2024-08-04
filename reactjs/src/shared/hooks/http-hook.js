import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);
        const httpAbortCrtl = new AbortController();
        activeHttpRequests.current.push(httpAbortCrtl);

        try {
            const response = await fetch(url, {
                method,
                headers,
                body,
                signal: httpAbortCrtl.signal
            });

            const responseData = await response.json();

            activeHttpRequests.current = activeHttpRequests.current.filter(
                reqCtrl => reqCtrl !== httpAbortCrtl
            );

            if (!response.ok) {
                throw new Error(responseData.message || 'Something went wrong!');
            }
            
            setIsLoading(false);
            return responseData;
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Request was aborted:', err.message);
            } else {
                setError(err.message);
            }
            setIsLoading(false);
            throw err;
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    });

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
        };
    }, []);

    return { isLoading, error, sendRequest, clearError };
};