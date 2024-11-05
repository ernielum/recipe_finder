import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

import AddIngredient from './components/AddIngredient';
import IngredientList from './components/IngredientList';
import SearchButton from './components/SearchButton.js';
import RecipeList from './components/RecipeList';

function App() {
  const [ingredients, setIngredients] = useState([]); // State to hold added ingredients
  const [recipes, setRecipes] = useState([]); // State to hold fetched recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to hold selected recipe

  // Function to add ingredient
  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  // Function to remove ingredient from list
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  // Function to search for recipes
  const searchRecipes = async () => {
    try {
      // Join ingredients into a comma-separated string
      const ingredientList = ingredients.join(',');
      // Make a GET request to the backend API
      const response = await axios.get(`http://localhost:5000/api/recipes`, {
        params: { ingredients: ingredientList }, // Send ingredients as query parameters
      });
      setRecipes(response.data); // Set the fetched recipes to state
      console.log("Fetched Recipes:", response.data); // Log fetched recipes to the console
    } catch (error) {
      console.error("Error fetching recipes:", error); // Handle errors
    }
  }

  return (
    <div>
      <header>
        <h1>Recipe Finder</h1>
      </header>
      <main>
        <p>
          Welcome to the Recipe Finder! Start searching for your favorite recipes.
        </p>
        <AddIngredient onAddIngredient={addIngredient} />
        <IngredientList ingredients={ingredients} onRemoveIngredient={removeIngredient} />
        <SearchButton onSearch={searchRecipes} />
        <RecipeList recipes={recipes} />
      </main>
      <footer>
        <p>
          &copy; 2024 <i>Recipe Finder by Ernie Lum</i>
        </p>
      </footer>
    </div>
  );
}

export default App;
