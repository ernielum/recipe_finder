import React, { useState } from 'react';
import axios from 'axios';

function AddIngredient({ onAddIngredient }) {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async (query) => {
        if (query.length === 0) {
            setSuggestions([]);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/api/autocomplete`, {
                params: { query: query },
            });
            setSuggestions(response.data);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        fetchSuggestions(value);
    }

    // Add ingredient to list
    const handleAdd = (ingredient) => {
        onAddIngredient(ingredient)
        setInput('');
        setSuggestions([]);
    };

return (
        <div>
            <input
                type="text"
                placeholder="Add Ingredient"
                value={input}
                onChange={handleChange}
            />
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => handleAdd(suggestion.name)}>
                        {suggestion.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddIngredient;
