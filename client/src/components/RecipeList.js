import React from 'react';

function RecipeList({ recipes, onRecipeClick }) {
    if (!recipes || recipes.length === 0) {
        return <p>No recipes found. Please modify your ingredient list!</p>
    }

    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <div key={index} onClick={() => onRecipeClick(recipe.id)}>
                        {recipe.title}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;