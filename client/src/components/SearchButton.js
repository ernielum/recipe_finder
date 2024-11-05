import React from 'react';

function SearchButton({ onSearch }) {
    return (
        <button onClick={onSearch}>Find Recipes</button>
    );
}


export default SearchButton;