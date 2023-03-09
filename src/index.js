'use strict';

import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

// require('dotenv').config();

// const apiKey = process.env.API_KEY;

const recipeContainer = document.querySelector('.container__content__mainContent');
const recipePictureContainer = document.querySelector('.container__content__mainContent__dishPicture');
const recipePicture = document.getElementById('recipe-picture');
const ingredientContainer = document.querySelector('.container__content__mainContent__ingredients__list');
const ingredientContainerItem = document.querySelector('.container__content__mainContent__ingredients__list__item');
const previewPicture = document.getElementById('preview-picture');
const recipeTitleEl = document.querySelector('.container__content__sidebar__recipe__title');
const recipeTitleMain = document.querySelector('.container__content__mainContent__title');
const recipeDirections = document.querySelector('.container__content__mainContent__directions__text');
const cookingTime = document.querySelector('.container__content__mainContent__dishInfo__time span');
const recipeServings = document.querySelector('.container__content__mainContent__dishInfo__servings span');
const searchBtn = document.getElementById('submitButton');
const searchBarInput = document.getElementById('searchRecipe');
const sidebar = document.querySelector('.container__content__sidebar');
const sidebarRecipeTab = document.querySelector('.container__content__sidebar__recipe');
const saveRecipeBtn = document.querySelector('.container__header__buttons__addRecipe.btn');
const saveRecipeBtnInRecipe = document.querySelector('.container__content__mainContent__dishInfo__saveBtn');
const savedRecipesBtn = document.querySelector('.container__header__buttons__savedRecipes.btn');
const incrementServingsBtn = document.querySelector('.incrementBtn');
const decrementServingsBtn = document.querySelector('.decrementBtn');
const backToResultsBtn= document.querySelector('.container__content__backToResults.btn-secondary');

backToResultsBtn.addEventListener('click', ()=> {
    sidebar.style.display = "flex";
    recipeContainer.style.display = "none";
    backToResultsBtn.style.display = "none";


})

// sidebarRecipeTab.addEventListener('click', ()=> {
//     sidebar.style.display = "none";
//     recipeContainer.style.display = "flex";
//     recipeContainer.style.flexDirection = "column";
//     backToResultsBtn.style.display = "flex";


// })

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

        sidebar.style.display = "none";
        recipeContainer.style.display = "flex";
        recipeContainer.style.flexDirection = "column";
        backToResultsBtn.style.display = "flex";

    });

let savedRecipes = [];

const storeRecipe = () => {
    let lastClickedRecipe = tempId.slice(-1);
    if(savedRecipes.some(recipe => recipe[0].id === lastClickedRecipe[0].id)){
      alert("Recipe already saved.")
    } else {
    savedRecipes.push(lastClickedRecipe);
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
    // STORE RECIPES IN LOCAL STORAGE 
    let savedRecipesSerialized = JSON.stringify(savedRecipes);
    localStorage.setItem('savedRecipes', savedRecipesSerialized);
    }
}

saveRecipeBtn.addEventListener('click', storeRecipe);
saveRecipeBtnInRecipe.addEventListener('click', storeRecipe);

// GETTING MY RECIPES (STORED RECIPES)
// PUT RECIPES INTO SIDEBAR FROM LOCALSTORAGE

const getSavedRecipes = () => {
    // CONVERT STRING FROM LOCALSTORAGE TO ARRAY LIKE STRUCTURE
let localStorageRecipesDeserialized = JSON.parse(localStorage.getItem('savedRecipes'));
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
}

savedRecipesBtn.addEventListener('click', getSavedRecipes);



const getRecipeId = async function (id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();
}

// GETTING A RANDOM RECIPE 

const getRandRecipe = async function () {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();

    const recipeTitle = data.recipes[0].title;
    const recipeId = data.recipes[0].id;
    const recipeImage = data.recipes[0].image;
    const readyIn = data.recipes[0].readyInMinutes;
    const servings = data.recipes[0].servings;
    const instructions = data.recipes[0].instructions;
    const extIngredients = data.recipes[0].extendedIngredients;

    tempId.push({
        id: recipeId,
        title: recipeTitle,
        image: recipeImage
    })

    // INSERTING IMAGE 
    recipePictureContainer.innerHTML = "";
    recipePictureContainer.innerHTML = `<img id="recipe-picture" src="${recipeImage}" alt="${recipeTitle}">`

    // INSERTING COOKING TIME
    cookingTime.innerHTML = "";
    cookingTime.innerHTML = `<span>${readyIn} </span>`;

    // INSERTING SERVINGS 
    recipeServings.innerHTML = "";
    recipeServings.innerHTML = `<span>${servings} </span>`;
    tempServings.push(servings);
    
    // INSERTING INGREDIENTS  

    extIngredients.forEach(ingredient => {
        currentIngredients.push(ingredient);
        let ingredientItem = document.createElement("LI");
        let ingredientItemContent = document.createTextNode(`${ingredient.amount.toFixed(2)} ${ingredient.unit} ${ingredient.name}`);
        ingredientItem.innerText = `${ingredientItemContent.textContent}`
        ingredientContainer.appendChild(ingredientItem);
    })

    // INSERTING TITLE  

    recipeTitleMain.innerHTML = "";
    recipeTitleMain.insertAdjacentHTML('afterbegin', `
        <h1>${recipeTitle}</h1>`);

    // INSERTING DIRECTIONS
    recipeDirections.innerHTML = "";
    recipeDirections.innerHTML = `${instructions}`;

    // INSERTING TITLE INTO SIDEBAR TAB
    recipeTitleEl.innerText = recipeTitle;
    previewPicture.src = recipeImage;

};

// GETTING A RANDOM RECIPE END

window.addEventListener('DOMContentLoaded', getRandRecipe());

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

// SEARCH RECIPE BY ID

const searchRecipeById = async function (id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();

    const title = data.title;
    const image = data.image;
    const readyIn = data.readyInMinutes;
    const servings = data.servings
    const instructions = data.instructions;
    const extIngredients = data.extendedIngredients;

        // INSERTING IMAGE 
        recipePictureContainer.innerHTML = "";
        recipePictureContainer.innerHTML = `<img id="recipe-picture" src="${image}" alt="${title}">`

        // INSERTING COOKING TIME
        cookingTime.innerHTML = "";
        cookingTime.innerHTML = `<span>${readyIn} </span>`;

        // INSERTING SERVINGS 
        recipeServings.innerHTML = "";
        recipeServings.innerHTML = `<span>${servings} </span>`;
        tempServings.push(servings);
        
        // INSERTING INGREDIENTS  

        let ingredientList = [];

        extIngredients.forEach(ingredient => {
            ingredientList.push(`${ingredient.amount} ${ingredient.unit} ${ingredient.originalName}`)
         }
        )

        let allIngredients = [...ingredientList]

        recipeTitleMain.innerHTML = "";
        recipeTitleMain.insertAdjacentHTML('afterbegin', `
            <h1>${title}</h1>`);

        // INSTEAD OF A SINGLE LI, add one li for each ingredient
        ingredientContainer.innerHTML = "";
        ingredientContainer.insertAdjacentHTML('afterbegin', `
            <li class="container__content__mainContent__ingredients__list__item">${allIngredients}
        </li>`)

        // INSERTING DIRECTIONS
        recipeDirections.innerHTML = "";
        recipeDirections.innerHTML = `${instructions}`;
}

sidebar.addEventListener('click', (e) => {
    let recipeId = e.target.id;
    searchRecipeById(recipeId);
    getRecipeId(recipeId);
    // getRecipeInformation(recipeId);
});

// BASIC SEARCH IN SEARCH BAR

// 1. ADD error handling (eg. if the input is empty -> alert or notify user, a recipe at least three words should be entered)
// 2. DRY: include repeated code inside of a function!

searchBarInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        sidebar.innerHTML = "";
        let query = searchBarInput.value;
        searchRecipes(query);
        sidebar.style.display = "flex";
        recipeContainer.style.display = "none";
        backToResultsBtn.style.display = "none";
    }
})

searchBtn.addEventListener('click', () => {
    sidebar.innerHTML = "";
    let query = searchBarInput.value;
    searchRecipes(query);
    sidebar.style.display = "flex";
    recipeContainer.style.display = "none";
    backToResultsBtn.style.display = "none";
});

// ADJUST SERVINGS

let tempServings = [];
let currentServings = tempServings[tempServings.length - 1];
let incrementValue = 1;
let decrementValue;
let currentIngredients = [];

const getRecipeInformation = async function (currentRecipeId) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${currentRecipeId}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848&includeNutrition=false`);
    const data = await res.json();
    currentServings = data.servings;

    let ingredients = data.extendedIngredients;
    currentIngredients = [];
    ingredients.forEach(ingredient => {
        currentIngredients.push(ingredient);
    });
}

let clickedRecipeId;

    sidebar.addEventListener('click', (e) => {
        clickedRecipeId = e.target.id;
        getRecipeInformation(clickedRecipeId);
    });

incrementServingsBtn.addEventListener('click', () => {

    ingredientContainer.innerHTML = "";

    tempServings.push(parseInt(recipeServings.innerText));
    currentServings = tempServings[tempServings.length - 1];
   
        currentServings++;
        incrementValue = currentServings / tempServings[tempServings.length - 1];


    currentIngredients.forEach(ingredient => {
        ingredient.amount = ingredient.amount * incrementValue;

        let ingredientItem = document.createElement("LI");
        let ingredientItemContent = document.createTextNode(`${ingredient.amount.toFixed(2)} ${ingredient.unit} ${ingredient.name}`);
        ingredientItem.innerText = `${ingredientItemContent.textContent}`
        ingredientContainer.appendChild(ingredientItem);
    })
    
    recipeServings.innerHTML = "";
    recipeServings.innerHTML = `<span>${currentServings} </span>`;
    
});

decrementServingsBtn.addEventListener('click', () => {

    ingredientContainer.innerHTML = "";
   
    
    tempServings.push(parseInt(recipeServings.innerText));
    currentServings = tempServings[tempServings.length - 1];

        if(currentServings >= 2){
            currentServings--;
        };
        
    decrementValue = tempServings[tempServings.length - 1] / currentServings ;

       currentIngredients.forEach(ingredient => {

        if(currentServings >= 1){
            ingredient.amount = ingredient.amount / decrementValue;
        }
        
    
        let ingredientItem = document.createElement("LI");
        let ingredientItemContent = document.createTextNode(`${ingredient.amount.toFixed(2)} ${ingredient.unit} ${ingredient.name}`);
        ingredientItem.innerText = `${ingredientItemContent.textContent}`
        ingredientContainer.appendChild(ingredientItem);
    })
    
    recipeServings.innerHTML = "";
    recipeServings.innerHTML = `<span>${currentServings} </span>`;
});
