"use client"
import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
    const searchParam = useSearchParams();
    const query = searchParam.get('query');

    return (
        <div>
            <h1>Search Results for: {query}</h1>
            {/* Your search result logic here */}
        </div>
    );
};

export default SearchPage;
