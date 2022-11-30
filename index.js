'use strict';

const recipePicture = document.getElementById('recipe-picture');
const ingredientName = document.querySelector('.container__content__mainContent__ingredients__list__item');
const previewPicture = document.getElementById('preview-picture');
const recipeTitle = document.querySelector('.container__content__sidebar__recipe__title');
const recipeDirections = document.querySelector('.container__content__mainContent__directions__text');
const cookingTime = document.querySelector('.container__content__mainContent__dishInfo__time span');
const recipeServings = document.querySelector('.container__content__mainContent__dishInfo__servings span');


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
        ingredientName.insertAdjacentHTML('afterbegin', 
        `<li class="container__content__mainContent__ingredients__list__item">
             <p><i class="fa-solid fa-check"></i>${ingredient.original}</p>
        </li>`)
    });

    recipeTitle.innerText = title;
    recipePicture.src = image;
    previewPicture.src = image;
    recipeDirections.innerText = instructions;
    cookingTime.innerText = readyIn;
    recipeServings.innerText = servings;
};

// getRandRecipe();

// SCENARIO: User starts the app 

// 1. Page loads
// 2. Show all recipes in the sidebar
    // 2.1. search recipe based on random ingredient (random ingredient from array)

// 3. Open / show the first recipe of the list 

const searchRecipes = async function () {
    const res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=cheddar');
    const data = await res.json();
    console.log(data);
}

// searchRecipes();