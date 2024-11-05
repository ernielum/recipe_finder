import React from 'react';

function IngredientList({ ingredients, onRemoveIngredient }) {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => onRemoveIngredient(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default IngredientList;