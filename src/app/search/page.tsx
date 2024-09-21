"use client"
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const SearchResults = () => {
    const searchParam = useSearchParams();
    const query = searchParam.get('query');

    return (
        <div>
            <h1>Search Results for: {query}</h1>
            {/* Your search result logic here */}
        </div>
    );
};

const SearchPage = () => {
    return (
        <Suspense fallback={<div>Loading search results...</div>}>
            <SearchResults />
        </Suspense>
    );
};

export default SearchPage;

