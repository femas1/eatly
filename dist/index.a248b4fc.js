function t(t){return t&&t.__esModule?t.default:t}var e,n,i={};
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */e=i,n=function(t){var e=function(t){return new e.lib.init(t)};function n(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function i(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var i=document.createElement("img");i.src=this.options.avatar,i.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(i):t.insertAdjacentElement("afterbegin",i)}if(!0===this.options.close){var o=document.createElement("button");o.type="button",o.setAttribute("aria-label","Close"),o.className="toast-close",o.innerHTML="&#10006;",o.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var s=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&s>360?t.insertAdjacentElement("afterbegin",o):t.appendChild(o)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=n("x",this.options),c=n("y",this.options),l="left"==this.options.position?r:"-"+r,d="toastify-top"==this.options.gravity?c:"-"+c;t.style.transform="translate("+l+","+d+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var n=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,n),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},n={top:15,bottom:15},o={top:15,bottom:15},s=document.getElementsByClassName("toastify"),a=0;a<s.length;a++){t=!0===i(s[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=s[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[a].style[t]=o[t]+"px",o[t]+=r+15):!0===i(s[a],"toastify-left")?(s[a].style[t]=e[t]+"px",e[t]+=r+15):(s[a].style[t]=n[t]+"px",n[t]+=r+15)}return this},e.lib.init.prototype=e.lib,e},i?i=n():e.Toastify=n();const o=document.querySelector(".container__content__mainContent"),s=(document.getElementById("recipe-picture"),document.querySelector(".container__content__mainContent__ingredients__list__item"),document.getElementById("preview-picture"),document.querySelector(".container__content__sidebar__recipe__title"),document.querySelector(".container__content__mainContent__directions__text"),document.querySelector(".container__content__mainContent__dishInfo__time span"),document.querySelector(".container__content__mainContent__dishInfo__servings span"),document.getElementById("submitButton")),a=document.getElementById("searchRecipe"),r=document.querySelector(".container__content__sidebar"),c=document.querySelector(".container__header__buttons__addRecipe.btn"),l=(document.querySelector(".fa-floppy-disk"),document.querySelector(".container__header__buttons__savedRecipes.btn"));let d=[];r.addEventListener("click",(t=>{let e=t.target.id,n=t.target.innerText,i=t.target.firstElementChild.src;d.push({id:e,title:n,image:i})}));let p=[];c.addEventListener("click",(e=>{let n=d.slice(-1);if(p.some((t=>t[0].id===n[0].id)))alert("Recipe already saved.");else{p.push(n),t(i)({text:"Recipe successfully saved.",duration:5e3,destination:"https://github.com/apvarun/toastify-js",newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"},onClick:function(){}}).showToast();let e=JSON.stringify(p);localStorage.setItem("savedRecipes",e),console.log(`Your recipes: ${e}`)}})),l.addEventListener("click",(()=>{let t=JSON.parse(localStorage.getItem("savedRecipes"));console.log(t),r.innerHTML="",t.forEach((t=>{r.insertAdjacentHTML("beforeend",`\n                <div class="container__content__sidebar__recipe" id="${t[0].id}">\n                    <img id="preview-picture" src="${t[0].image}" alt="${t[0].title}">\n                        <h3 class="container__content__sidebar__recipe__title">${t[0].title}</h3>\n                </div>`)}))}));const u=async function(t){try{const e=await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=${t}`),n=await e.json();if(!e.ok)throw new Error(`${n.message}`);n.forEach((t=>{r.insertAdjacentHTML("beforeend",`\n            <div class="container__content__sidebar__recipe" id="${t.id}">\n                <img id="preview-picture" src="${t.image}" alt="burrito">\n                    <h3 class="container__content__sidebar__recipe__title" id="${t.id}">${t.title}</h3>\n            </div>`)}))}catch(t){alert(t)}};r.addEventListener("click",(t=>{let e=t.target.id;!async function(t){const e=await fetch(`https://api.spoonacular.com/recipes/${t}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`),n=await e.json(),i=n.title,s=n.image,a=n.readyInMinutes,r=n.servings,c=n.instructions,l=n.extendedIngredients;o.innerHTML="";let d=[];l.forEach((t=>{d.push(`${t.amount} ${t.unit} ${t.originalName}`)}));let p=[...d];o.insertAdjacentHTML("afterbegin",`\n    \x3c!-- MAIN CONTENT --\x3e        \n        <div class="container__content__mainContent__dishPicture">\n            <img id= "recipe-picture" src="${s}" alt="recipe-picture">\n        </div>\n        \x3c!-- DISH INFORMATION  --\x3e\n        <div class="container__content__mainContent__dishInfo">\n            <div class="container__content__mainContent__dishInfo__time">\n                <p>\n                    <i class="fa-regular fa-clock"></i>\n                    <span>${a}</span>minutes\n                </p>\n            </div>\n            <div class="container__content__mainContent__dishInfo__servings">\n                <p>\n                    <i class="fa-solid fa-users"></i> \n                    <span>${r}</span>servings</p>\n                    <i class="fa-solid fa-plus"></i>\n                    <i class="fa-solid fa-minus"></i>\n            </div>\n            <div class="container__content__mainContent__dishInfo__saveBtn">\n                <i class="fa-regular fa-floppy-disk"></i>\n            </div>\n        </div>\n        \x3c!-- DISH INFORMATION END --\x3e\n        <div class="container__content__mainContent__title">\n            <h1>${i}</h1>\n        </div>\n        \x3c!-- INGREDIENTS --\x3e\n\n            <div class="container__content__mainContent__ingredients">\n            <h1 class="container__content__mainContent__ingredients__heading">Ingredients</h1>\n            <ul class="container__content__mainContent__ingredients__list">\n                <li class="container__content__mainContent__ingredients__list__item">\n                        ${p}\n                </li>\n            </ul>\n        </div>\n    \x3c!-- INGREDIENTS --\x3e\n        \x3c!-- DIRECTIONS --\x3e\n        <div class="container__content__mainContent__directions">\n            <h1 class="container__content__mainContent__directions__heading">Directions</h1>\n            <p class="container__content__mainContent__directions__text">${c}</p>\n        </div>\n        \x3c!-- DIRECTIONS END --\x3e\n    `)}(e),async function(t){const e=await fetch(`https://api.spoonacular.com/recipes/${t}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);await e.json()}(e),console.log(t.target)})),a.addEventListener("keypress",(t=>{if("Enter"===t.key){r.innerHTML="";let t=a.value;u(t)}})),s.addEventListener("click",(()=>{r.innerHTML="";let t=a.value;u(t)}));
//# sourceMappingURL=index.a248b4fc.js.map
