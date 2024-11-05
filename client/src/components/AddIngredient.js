import React, { useState } from 'react';

function AddIngredient({ onAddIngredient }) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        onAddIngredient(input)
        setInput('');
    };

return (
        <div>
            <input
                type="text"
                placeholder="Add Ingredient"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button> 
        </div>
    );
}

export default AddIngredient;
