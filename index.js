'use strict';

const recipePicture = document.getElementById('recipe-picture');
const ingredientName = document.querySelector('.container__content__mainContent__ingredients__list__item');




// API TEST CALL 

const getRandRecipe = async function () {
    const res = await fetch('https://api.spoonacular.com/recipes/random?apiKey=b69e38af682b4e7fa423de0c87c3e848');
    const data = await res.json();

    const title = data.recipes[0].title;
    const image = data.recipes[0].image;
    const readyIn = data.recipes[0].readyInMinutes;
    const servings = data.recipes[0].servings
    const instructions = data.recipes[0].instructions;
    const extIngredients = data.recipes[0].extendedIngredients;

    extIngredients.forEach(ingredient => {
        console.log(ingredient.original)
        ingredientName.innerHTML = `${ingredient.original}`
    });

    recipePicture.src = image;
};

getRandRecipe();