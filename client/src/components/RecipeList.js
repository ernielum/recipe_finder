import React from 'react';

function RecipeList({ recipes }) {
    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;