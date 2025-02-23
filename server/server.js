require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT
const apiKey = process.env.SPOONACULAR_API_KEY;

app.use(cors());

// specific recipe details
app.get('/api/recipeDetails/:id', async (req, res) => {
    const {id} = req.params;

    try {
        // Fetch both recipe info and instructions
        const [recipeInfo, recipeInstructions] = await Promise.all([
            axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`),
            axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`)
        ]);

        const recipeDetails = {
            ...recipeInfo.data,
            instructions: recipeInstructions.data
        };

        res.json(recipeDetails);
        console.log(recipeDetails)

    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Spoonacular API');
    }

});

app.get('/api/recipes', async (req, res) => {
    const ingredients = req.query.ingredients;

    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Spoonacular API');
    }
});

app.get('/api/autocomplete', async (req, res) => {
    const query = req.query.query;

    try {
        const response = await axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=${apiKey}`)
        res.json(response.data)
    } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
        res.status(500).send("Server error");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});