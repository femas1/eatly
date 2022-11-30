'use strict';

const recipePicture = document.getElementById('recipe-picture');
const ingredientName = document.querySelector('.container__content__mainContent__ingredients__list__item');
const previewPicture = document.getElementById('preview-picture');
const recipeTitle = document.querySelector('.container__content__sidebar__recipe__title');
const recipeDirections = document.querySelector('.container__content__mainContent__directions__text');
const cookingTime = document.querySelector('.container__content__mainContent__dishInfo__time span');
const recipeServings = document.querySelector('.container__content__mainContent__dishInfo__servings span');
const searchBtn = document.getElementById('submitButton');


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
    // 2.2. push first 10 results into the preview tabs in the sidebar (slice array, add link into search)
// 3. User clicks on one of the recipe -> show recipe in main content area

// 3. Open / show the first recipe of the list 
const sidebar = document.querySelector('.container__content__sidebar');

const searchRecipes = async function () {
    const res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=cheddar');
    const data = await res.json();
    
    
    // const title = data[0].title;
    // const image = data[0].image;

    data.forEach(recipe => {

        sidebar.insertAdjacentHTML('afterbegin', `
        <div class="container__content__sidebar__recipe">
            <img id="preview-picture" src="${recipe.image}" alt="burrito">
                <h3 class="container__content__sidebar__recipe__title">${recipe.title}</h3>
        </div>
`)
    })
}

// searchRecipes();

searchBtn.addEventListener('click', () => searchRecipes())

