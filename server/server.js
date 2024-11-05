require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT

app.use(cors());

app.get('/api/recipes', async (req, res) => {
    const ingredients = req.query.ingredients;
    const apiKey = process.env.SPOONACULAR_API_KEY;

    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from Spoonacular API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});