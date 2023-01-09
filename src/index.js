'use strict';

// require('dotenv').config();

// const apiKey = process.env.API_KEY;

const recipeContainer = document.querySelector('.container__content__mainContent');
const recipePicture = document.getElementById('recipe-picture');
const ingredientContainer = document.querySelector('.container__content__mainContent__ingredients__list__item');
const previewPicture = document.getElementById('preview-picture');
const recipeTitle = document.querySelector('.container__content__sidebar__recipe__title');
const recipeDirections = document.querySelector('.container__content__mainContent__directions__text');
const cookingTime = document.querySelector('.container__content__mainContent__dishInfo__time span');
const recipeServings = document.querySelector('.container__content__mainContent__dishInfo__servings span');
const searchBtn = document.getElementById('submitButton');
const searchBar = document.getElementById('searchRecipe');
const sidebar = document.querySelector('.container__content__sidebar');
const saveRecipeBtn = document.querySelector('.container__header__buttons__addRecipe.btn');

// SAVE A RECIPE

// 1. User clicks on save 
// 2. define current recipe (when clicking on recipe in sidebar --> save id somewhere in html)
// 3. get the id from the html (from point 2)
// 4. Get the current recipe id (getRecipeId --> calls api)
// 5. and save it to localStorage

// 1. Get ID from clicked recipe and push it to an Array 'tempId', where it is temporary stored

let tempId = [];

    
sidebar.addEventListener('click', (e) => {
        let recipeId = e.target.id;
        tempId.push(recipeId);

    });

// 2. When user clicks on save button, get the id from tempId array and push it to an array in localStorage (to avoid getting the wrong index, get alway the -1 index - last clicked recipe)

let savedRecipes = [];

saveRecipeBtn.addEventListener('click', (e)=> {
    let lastClickedRecipe = tempId.slice(-1);
    savedRecipes.push(lastClickedRecipe);
    // STORE RECIPES IN LOCAL STORAGE 
    localStorage.setItem('savedRecipe', savedRecipes);
    console.log(`Your recipes: ${savedRecipes}`);
})



// API RANDOM RECIPE CALL 

const getRecipeId = async function (id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();

    // console.log(data.id);
}



const getRandRecipe = async function () {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();

    const title = data.recipes[0].title;
    const image = data.recipes[0].image;
    const readyIn = data.recipes[0].readyInMinutes;
    const servings = data.recipes[0].servings
    const instructions = data.recipes[0].instructions;
    const extIngredients = data.recipes[0].extendedIngredients;

    recipeTitle.innerText = title;
    previewPicture.src = image;

    // recipeContainer.innerHTML = ""

    recipeContainer.insertAdjacentHTML('afterbegin', `
    <!-- MAIN CONTENT -->        
        <div class="container__content__mainContent__dishPicture">
            <img id= "recipe-picture" src="${image}" alt="recipe-picture">
        </div>
        <!-- DISH INFORMATION  -->
        <div class="container__content__mainContent__dishInfo">
            <div class="container__content__mainContent__dishInfo__time">
                <p>
                    <i class="fa-regular fa-clock"></i>
                    <span>${readyIn}</span>minutes
                </p>
            </div>
            <div class="container__content__mainContent__dishInfo__servings">
                <p>
                    <i class="fa-solid fa-users"></i> 
                    <span>${servings}</span>servings</p>
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-solid fa-minus"></i>
            </div>
            <div class="container__content__mainContent__dishInfo__saveBtn">
                <i class="fa-regular fa-floppy-disk"></i>
            </div>
        </div>
        <!-- DISH INFORMATION END -->
        <div class="container__content__mainContent__title">
            <h1>${title}</h1>
        </div>
        
        <!-- DIRECTIONS -->
        <div class="container__content__mainContent__directions">
            <h1 class="container__content__mainContent__directions__heading">Directions</h1>
            <p class="container__content__mainContent__directions__text">${instructions}</p>
        </div>
        <!-- DIRECTIONS END -->
    `)

// FIX INGREDIENT FUNCTION HERE 

// extIngredients.forEach(extIngredient => {
//         extIngredient.forEach(ingredient => {
//             ingredientContainer.insertAdjacentHTML('beforeend', `
//            <p>${ingredient.amount} ${ingredient.unit} ${ingredient.originalName}</p>
// `)
//         })
//     });
};

getRandRecipe();

// SCENARIO: User starts the app 

// 1. Page loads
// 2. Show all recipes in the sidebar
    // 2.1. search recipe based on random ingredient (random ingredient from array)
    // 2.2. push first 10 results into the preview tabs in the sidebar (slice array, add link into search)
// 3. User clicks on one of the recipe -> show recipe in main content area

// 3. Open / show the first recipe of the list 


const searchRecipes = async function (ingredient) {
    try {
    const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=${ingredient}`);
    const data = await res.json();
    

    if(!res.ok) throw new Error(`${data.message}`);

    data.forEach(recipe => {

        sidebar.insertAdjacentHTML('beforeend', `
            <div class="container__content__sidebar__recipe" id="${recipe.id}">
                <img id="preview-picture" src="${recipe.image}" alt="burrito">
                    <h3 class="container__content__sidebar__recipe__title">${recipe.title}</h3>
            </div>`
        )
    })
    } catch(err) {
        alert(err);
    }
}

// searchRecipes("egg")


// window.addEventListener('DOMContentLoaded', getRandRecipe(), searchRecipes())

// searchRecipes();

// SEARCH RECIPE BY ID

// // // 1. clicked on recipe
// // // 2. get the recipe title(outer text?)
// // // 3. search the title (exact string) using complexSearch
// // // 4. insert recipe in main area (like in getRandRecipe)

const getRecipeById = async function (id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();

    const title = data.title;
    const image = data.image;
    const readyIn = data.readyInMinutes;
    const servings = data.servings
    const instructions = data.instructions;
    const extIngredients = data.extendedIngredients;

    ////////////////////////////////////////////////////////////
    //////////BUG

    // IF EMPTYING THE CONTAINER INGRENDIENTS WILL BE REMOVED TOO
    // IF NOT EMPTYING IT, EACH CLICK CREATES A NEW CONTAINER 

    recipeContainer.innerHTML = "";

        //    INSERT INGREDIENTS  

        let ingredientList = [];

        extIngredients.forEach(ingredient => {
            ingredientList.push(`${ingredient.amount} ${ingredient.unit} ${ingredient.originalName}`)
         }
        )

        let allIngredients = [...ingredientList]


    recipeContainer.insertAdjacentHTML('afterbegin', `
    <!-- MAIN CONTENT -->        
        <div class="container__content__mainContent__dishPicture">
            <img id= "recipe-picture" src="${image}" alt="recipe-picture">
        </div>
        <!-- DISH INFORMATION  -->
        <div class="container__content__mainContent__dishInfo">
            <div class="container__content__mainContent__dishInfo__time">
                <p>
                    <i class="fa-regular fa-clock"></i>
                    <span>${readyIn}</span>minutes
                </p>
            </div>
            <div class="container__content__mainContent__dishInfo__servings">
                <p>
                    <i class="fa-solid fa-users"></i> 
                    <span>${servings}</span>servings</p>
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-solid fa-minus"></i>
            </div>
            <div class="container__content__mainContent__dishInfo__saveBtn">
                <i class="fa-regular fa-floppy-disk"></i>
            </div>
        </div>
        <!-- DISH INFORMATION END -->
        <div class="container__content__mainContent__title">
            <h1>${title}</h1>
        </div>
        <!-- INGREDIENTS -->

            <div class="container__content__mainContent__ingredients">
            <h1 class="container__content__mainContent__ingredients__heading">Ingredients</h1>
            <ul class="container__content__mainContent__ingredients__list">
                <li class="container__content__mainContent__ingredients__list__item">
                        ${allIngredients}
                </li>
            </ul>
        </div>
    <!-- INGREDIENTS -->
        <!-- DIRECTIONS -->
        <div class="container__content__mainContent__directions">
            <h1 class="container__content__mainContent__directions__heading">Directions</h1>
            <p class="container__content__mainContent__directions__text">${instructions}</p>
        </div>
        <!-- DIRECTIONS END -->
    `)
}

sidebar.addEventListener('click', (e) => {
    let recipeId = e.target.id;
    getRecipeById(recipeId);
    getRecipeId(recipeId);
});

// BASIC SEARCH IN SEARCH BAR

searchBtn.addEventListener('click', () => {
    sidebar.innerHTML = "";
    let query = searchBar.value;
    searchRecipes(query);
});