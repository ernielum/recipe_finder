import React from 'react';

function IngredientList({ ingredients, onRemoveIngredient }) {
    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        {ingredient}
                        <button onClick={() => onRemoveIngredient(index)}>Remove</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default IngredientList;