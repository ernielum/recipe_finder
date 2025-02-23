import React from 'react'

function RecipeDetails({ recipe }) {
    if (!recipe) return <div>Select a recipe to see details.</div>;

    return (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image}></img>
            <h3>Ingredients</h3>
            <ul>
                {recipe.extendedIngredients.map((ingredient, index) => (
                <div key={index}>{ingredient.amount} {ingredient.unit} of {ingredient.name}
                </div>
                ))}
            </ul>
            <h3>Instructions</h3>
            <p>{recipe.instructions.map((instruction, index) => (
                instruction.steps.map((step, stepIndex) => (
                    <p key={index}>{step.number}. {step.step}
                    </p>
                ))
            ))}
            </p>
        </div>
    )
}

export default RecipeDetails;