import { useEffect } from 'react';

const useWindows = (event, callback) => {
    useEffect(() => {
        window.addEventListener(event, callback);
        return () => window.removeEventListener(event, callback);
    }, [event, callback]);
};

export default useWindows;