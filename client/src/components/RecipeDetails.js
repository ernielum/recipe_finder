import React from 'react'

function RecipeDetails({ recipe }) {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image}></img>
            <p>{recipe.summary}</p>
            <h3>Ingredients</h3>
            <ul>
                {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.amount} {ingredient.unit} of {ingredient.name}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    )
}

export default RecipeDetails;