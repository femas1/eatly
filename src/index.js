'use strict';

import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

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
const searchBarInput = document.getElementById('searchRecipe');
const sidebar = document.querySelector('.container__content__sidebar');
const saveRecipeBtn = document.querySelector('.container__header__buttons__addRecipe.btn');
const saveRecipeBtnInRecipe = document.querySelector('.fa-floppy-disk');
const savedRecipesBtn = document.querySelector('.container__header__buttons__savedRecipes.btn');
const incrementServingsBtn = document.querySelector('.container__header__logo');
const decrementServingsBtn = document.querySelector('.decrementBtn');

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
        let recipeTitle = e.target.innerText;

        let recipeImage;       
            if(e.target.tagName === "DIV"){
                recipeImage = e.target.firstElementChild.src;
            }else if(e.target.tagName === "H3"){
                recipeImage = e.target.previousElementSibling.src;
            }

        tempId.push({
            id: recipeId,
            title: recipeTitle,
            image: recipeImage
        })
    });

// 2. When user clicks on save button, get the id from tempId array and push it to an array in localStorage (to avoid getting the wrong index, get alway the -1 index - last clicked recipe)

let savedRecipes = [];

saveRecipeBtn.addEventListener('click', (e)=> {
    let lastClickedRecipe = tempId.slice(-1);
    if(savedRecipes.some(recipe => recipe[0].id === lastClickedRecipe[0].id)){
      alert("Recipe already saved.")
    } else {
    savedRecipes.push(lastClickedRecipe);
    // alert("Recipe successfully saved.")
    // SHOW TOAST NOTIFICATION 
    Toastify({
        text: "Recipe successfully saved.",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    // TOAST NOTIFICATION END

    // saveRecipeBtn.firstElementChild.classList = "fa-regular fa-circle-check"
    // STORE RECIPES IN LOCAL STORAGE 
    let savedRecipesSerialized = JSON.stringify(savedRecipes);
    localStorage.setItem('savedRecipes', savedRecipesSerialized);
    console.log(`Your recipes: ${savedRecipesSerialized}`);
    }
})

// GETTING MY RECIPES (STORED RECIPES)

// 1. User clicks on btn "my recipes"
// 2. Get recipe ids from local storage (getItem('keyName')) -> save recipe title too, push it into sidebar, when user click call api based on stored id, display using getrecipebyid function

// PUT RECIPES INTO SIDEBAR FROM LOCALSTORAGE

savedRecipesBtn.addEventListener('click', () => {
         // CONVERT STRING FROM LOCALSTORAGE TO ARRAY LIKE STRUCTURE
    let localStorageRecipesDeserialized = JSON.parse(localStorage.getItem('savedRecipes'));
    console.log(localStorageRecipesDeserialized);
    sidebar.innerHTML = "";
        // LOOPING OVER ARRAY AND CREATE A LIST OF STORED RECIPES AND PUSH INTO SIDEBAR
    localStorageRecipesDeserialized.forEach(recipeArray => {
           sidebar.insertAdjacentHTML('beforeend', `
                <div class="container__content__sidebar__recipe" id="${recipeArray[0].id}">
                    <img id="preview-picture" src="${recipeArray[0].image}" alt="${recipeArray[0].title}">
                        <h3 class="container__content__sidebar__recipe__title">${recipeArray[0].title}</h3>
                </div>`
            )
    })
})


// API RANDOM RECIPE CALL 

const getRecipeId = async function (id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();
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
                    <i class="fa-solid fa-plus incrementBtn"></i>
                    <i class="fa-solid fa-minus decrementBtn"></i>
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
}
// getRandRecipe();

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
                    <h3 class="container__content__sidebar__recipe__title" id="${recipe.id}">${recipe.title}</h3>
            </div>`
        )
    })
    } catch(err) {
        alert(err);
    }
}

// window.addEventListener('DOMContentLoaded', getRandRecipe(), searchRecipes())

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
                    <i class="fa-solid fa-plus incrementBtn"></i>
                    <i class="fa-solid fa-minus decrementBtn"></i>
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

// 1. ADD error handling (eg. if the input is empty -> alert or notify user, a recipe at least three words should be entered)
// 2. DRY: include repeated code inside of a function!

searchBarInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        sidebar.innerHTML = "";
        let query = searchBarInput.value;
        searchRecipes(query);
    }
})

searchBtn.addEventListener('click', () => {
    sidebar.innerHTML = "";
    let query = searchBarInput.value;
    searchRecipes(query);
});

// ADJUST SERVINGS

// 1. Get the recipe information = a. Api call b. check standard number of serving c. logic to calculate servings depending on starting number of servings d. get amounts from extendedIngredients array and update (increment / decrement based on user's input)
// 2. Update the ingredient amounts (increment/decrement) according to the user input (+/-)

// TEST CALL TO GET RECIPE INFO
// INCREMENT AND DECREMENT SERVINGS

let currentServings = 1;
let incrementValue = 1;

const getRecipeInformation = async function (currentRecipeId) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${currentRecipeId}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848&includeNutrition=false`);
    const data = await res.json();
    currentServings = data.servings;
    let ingredients = data.extendedIngredients;
    ingredients.forEach(ingredient => {
        console.log(ingredient.amount * incrementValue);
        
    }) 
}

// GETTING RECIPE ID FROM TAB IN SIDEBAR 

let clickedRecipeId;

    sidebar.addEventListener('click', (e) => {
        clickedRecipeId = e.target.id;
    });

// INCREMENTING SERVING ON BUTTON CLICK
// CALCULATING THE INCREMENT VALUE  (INGREDIENT RATIO)BASED ON CURRENT SERVING AMOUNT
// GETTING THE RECIPE INFORMATION (INGREDIENT AMOUNTS) OF THE CLICKED RECIPE

incrementServingsBtn.addEventListener('click', () => {
    currentServings++;
    if(currentServings > 0) {
      incrementValue = currentServings / (currentServings - 1);
    }
    getRecipeInformation(clickedRecipeId);
});


