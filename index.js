'use strict';

const recipePicture = document.getElementById('recipe-picture');
const ingredientName = document.querySelector('.container__content__mainContent__ingredients__list__item');
const previewPicture = document.getElementById('preview-picture');
const recipeTitle = document.querySelector('.container__content__sidebar__recipe__title');
const recipeDirections = document.querySelector('.container__content__mainContent__directions__text');
const cookingTime = document.querySelector('.container__content__mainContent__dishInfo__time span');
const recipeServings = document.querySelector('.container__content__mainContent__dishInfo__servings span');
const searchBtn = document.getElementById('submitButton');
const sidebar = document.querySelector('.container__content__sidebar');


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

// SCENARIO: User starts the app 

// 1. Page loads
// 2. Show all recipes in the sidebar
    // 2.1. search recipe based on random ingredient (random ingredient from array)
    // 2.2. push first 10 results into the preview tabs in the sidebar (slice array, add link into search)
// 3. User clicks on one of the recipe -> show recipe in main content area

// 3. Open / show the first recipe of the list 


const searchRecipes = async function () {
    const res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=cheddar');
    const data = await res.json();

    data.forEach(recipe => {

        sidebar.insertAdjacentHTML('beforeend', `
            <div class="container__content__sidebar__recipe" id="${recipe.id}">
                <img id="preview-picture" src="${recipe.image}" alt="burrito">
                    <h3 class="container__content__sidebar__recipe__title">${recipe.title}</h3>
            </div>`
        )
    })
}

// window.addEventListener('DOMContentLoaded', getRandRecipe(), searchRecipes())

searchRecipes();

// SEARCH RECIPE BY ID

// // // 1. clicked on recipe
// // // 2. get the recipe title(outer text?)
// // // 3. search the title (exact string) using complexSearch
// // // 4. insert recipe in main area (like in getRandRecipe)

const getRecipeById = async function (id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();

    console.log(data)

    const title = data.title;
    const image = data.image;
    const readyIn = data.readyInMinutes;
    const servings = data.servings
    const instructions = data.instructions;
    const extIngredients = data.extendedIngredients;

        recipeTitle.innerText = title;
    recipePicture.src = image;
    previewPicture.src = image;
    recipeDirections.innerText = instructions;
    cookingTime.innerText = readyIn;
    recipeServings.innerText = servings;
};

sidebar.addEventListener('click', (e) => {
    let recipeId = e.target.id;
    console.log(recipeId)
    getRecipeById(recipeId);
});