const n=document.querySelector(".container__content__mainContent"),e=(document.getElementById("recipe-picture"),document.querySelector(".container__content__mainContent__ingredients__list__item"),document.getElementById("preview-picture"),document.querySelector(".container__content__sidebar__recipe__title"),document.querySelector(".container__content__mainContent__directions__text"),document.querySelector(".container__content__mainContent__dishInfo__time span"),document.querySelector(".container__content__mainContent__dishInfo__servings span"),document.getElementById("submitButton")),t=document.getElementById("searchRecipe"),i=document.querySelector(".container__content__sidebar"),_=document.querySelector(".container__header__buttons__addRecipe.btn"),c=(document.querySelector(".fa-floppy-disk"),document.querySelector(".container__header__buttons__savedRecipes.btn"));let a=[];i.addEventListener("click",(n=>{let e=n.target.id;a.push(e)}));let o=[];_.addEventListener("click",(n=>{let e=a.slice(-1);o.push(e),localStorage.setItem("savedRecipes",o)})),c.addEventListener("click",(()=>{let n=JSON.parse("["+localStorage.getItem("savedRecipes")+"]");i.innerHTML="",n.forEach((n=>{i.insertAdjacentHTML("beforeend",`\n                <div class="container__content__sidebar__recipe" id="${n}">\n                    <img id="preview-picture" src="#" alt="burrito">\n                        <h3 class="container__content__sidebar__recipe__title">${n}</h3>\n                </div>`)}))}));i.addEventListener("click",(e=>{let t=e.target.id;!async function(e){const t=await fetch(`https://api.spoonacular.com/recipes/${e}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`),i=await t.json(),_=i.title,c=i.image,a=i.readyInMinutes,o=i.servings,s=i.instructions,r=i.extendedIngredients;n.innerHTML="";let d=[];r.forEach((n=>{d.push(`${n.amount} ${n.unit} ${n.originalName}`)}));let l=[...d];n.insertAdjacentHTML("afterbegin",`\n    \x3c!-- MAIN CONTENT --\x3e        \n        <div class="container__content__mainContent__dishPicture">\n            <img id= "recipe-picture" src="${c}" alt="recipe-picture">\n        </div>\n        \x3c!-- DISH INFORMATION  --\x3e\n        <div class="container__content__mainContent__dishInfo">\n            <div class="container__content__mainContent__dishInfo__time">\n                <p>\n                    <i class="fa-regular fa-clock"></i>\n                    <span>${a}</span>minutes\n                </p>\n            </div>\n            <div class="container__content__mainContent__dishInfo__servings">\n                <p>\n                    <i class="fa-solid fa-users"></i> \n                    <span>${o}</span>servings</p>\n                    <i class="fa-solid fa-plus"></i>\n                    <i class="fa-solid fa-minus"></i>\n            </div>\n            <div class="container__content__mainContent__dishInfo__saveBtn">\n                <i class="fa-regular fa-floppy-disk"></i>\n            </div>\n        </div>\n        \x3c!-- DISH INFORMATION END --\x3e\n        <div class="container__content__mainContent__title">\n            <h1>${_}</h1>\n        </div>\n        \x3c!-- INGREDIENTS --\x3e\n\n            <div class="container__content__mainContent__ingredients">\n            <h1 class="container__content__mainContent__ingredients__heading">Ingredients</h1>\n            <ul class="container__content__mainContent__ingredients__list">\n                <li class="container__content__mainContent__ingredients__list__item">\n                        ${l}\n                </li>\n            </ul>\n        </div>\n    \x3c!-- INGREDIENTS --\x3e\n        \x3c!-- DIRECTIONS --\x3e\n        <div class="container__content__mainContent__directions">\n            <h1 class="container__content__mainContent__directions__heading">Directions</h1>\n            <p class="container__content__mainContent__directions__text">${s}</p>\n        </div>\n        \x3c!-- DIRECTIONS END --\x3e\n    `)}(t),async function(n){const e=await fetch(`https://api.spoonacular.com/recipes/${n}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);await e.json()}(t)})),e.addEventListener("click",(()=>{i.innerHTML="",async function(n){try{const e=await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=${n}`),t=await e.json();if(!e.ok)throw new Error(`${t.message}`);t.forEach((n=>{i.insertAdjacentHTML("beforeend",`\n            <div class="container__content__sidebar__recipe" id="${n.id}">\n                <img id="preview-picture" src="${n.image}" alt="burrito">\n                    <h3 class="container__content__sidebar__recipe__title">${n.title}</h3>\n            </div>`)}))}catch(n){alert(n)}}(t.value)}));
//# sourceMappingURL=index.dce37325.js.map
