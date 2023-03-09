function t(t){return t&&t.__esModule?t.default:t}var e,n,i={};
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */e=i,n=function(t){var e=function(t){return new e.lib.init(t)};function n(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function i(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var i=document.createElement("img");i.src=this.options.avatar,i.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(i):t.insertAdjacentElement("afterbegin",i)}if(!0===this.options.close){var o=document.createElement("button");o.type="button",o.setAttribute("aria-label","Close"),o.className="toast-close",o.innerHTML="&#10006;",o.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var s=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&s>360?t.insertAdjacentElement("afterbegin",o):t.appendChild(o)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=n("x",this.options),c=n("y",this.options),l="left"==this.options.position?r:"-"+r,d="toastify-top"==this.options.gravity?c:"-"+c;t.style.transform="translate("+l+","+d+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var n=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,n),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},n={top:15,bottom:15},o={top:15,bottom:15},s=document.getElementsByClassName("toastify"),a=0;a<s.length;a++){t=!0===i(s[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=s[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[a].style[t]=o[t]+"px",o[t]+=r+15):!0===i(s[a],"toastify-left")?(s[a].style[t]=e[t]+"px",e[t]+=r+15):(s[a].style[t]=n[t]+"px",n[t]+=r+15)}return this},e.lib.init.prototype=e.lib,e},i?i=n():e.Toastify=n();const o=document.querySelector(".container__content__mainContent"),s=document.querySelector(".container__content__mainContent__dishPicture"),a=(document.getElementById("recipe-picture"),document.querySelector(".container__content__mainContent__ingredients__list")),r=(document.querySelector(".container__content__mainContent__ingredients__list__item"),document.getElementById("preview-picture")),c=document.querySelector(".container__content__sidebar__recipe__title"),l=document.querySelector(".container__content__mainContent__title"),d=document.querySelector(".container__content__mainContent__directions__text"),p=document.querySelector(".container__content__mainContent__dishInfo__time span"),u=document.querySelector(".container__content__mainContent__dishInfo__servings span"),h=document.getElementById("submitButton"),f=document.getElementById("searchRecipe"),m=document.querySelector(".container__content__sidebar"),_=(document.querySelector(".container__content__sidebar__recipe"),document.querySelector(".container__header__buttons__addRecipe.btn")),y=document.querySelector(".container__content__mainContent__dishInfo__saveBtn"),g=document.querySelector(".container__header__buttons__savedRecipes.btn"),v=document.querySelector(".incrementBtn"),b=document.querySelector(".decrementBtn"),L=document.querySelector(".container__content__backToResults.btn-secondary");L.addEventListener("click",(()=>{m.style.display="flex",o.style.display="none",L.style.display="none"}));let T=[];m.addEventListener("click",(t=>{let e,n=t.target.id,i=t.target.innerText;"DIV"===t.target.tagName?e=t.target.firstElementChild.src:"H3"===t.target.tagName&&(e=t.target.previousElementSibling.src),T.push({id:n,title:i,image:e}),m.style.display="none",o.style.display="flex",o.style.flexDirection="column",L.style.display="flex"}));let E=[];const w=()=>{let e=T.slice(-1);if(E.some((t=>t[0].id===e[0].id)))alert("Recipe already saved.");else{E.push(e),t(i)({text:"Recipe successfully saved.",duration:5e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"},onClick:function(){}}).showToast();let n=JSON.stringify(E);localStorage.setItem("savedRecipes",n)}};_.addEventListener("click",w),y.addEventListener("click",w);g.addEventListener("click",(()=>{let t=JSON.parse(localStorage.getItem("savedRecipes"));m.innerHTML="",t.forEach((t=>{m.insertAdjacentHTML("beforeend",`\n           <div class="container__content__sidebar__recipe" id="${t[0].id}">\n               <img id="preview-picture" src="${t[0].image}" alt="${t[0].title}">\n                   <h3 class="container__content__sidebar__recipe__title">${t[0].title}</h3>\n           </div>`)}))}));window.addEventListener("DOMContentLoaded",async function(){const t=await fetch("https://api.spoonacular.com/recipes/random?apiKey=b69e38af682b4e7fa423de0c87c3e848"),e=await t.json(),n=e.recipes[0].title,i=e.recipes[0].id,o=e.recipes[0].image,h=e.recipes[0].readyInMinutes,f=e.recipes[0].servings,m=e.recipes[0].instructions,_=e.recipes[0].extendedIngredients;T.push({id:i,title:n,image:o}),s.innerHTML="",s.innerHTML=`<img id="recipe-picture" src="${o}" alt="${n}">`,p.innerHTML="",p.innerHTML=`<span>${h} </span>`,u.innerHTML="",u.innerHTML=`<span>${f} </span>`,C.push(f),_.forEach((t=>{H.push(t);let e=document.createElement("LI"),n=document.createTextNode(`${t.amount.toFixed(2)} ${t.unit} ${t.name}`);e.innerText=`${n.textContent}`,a.appendChild(e)})),l.innerHTML="",l.insertAdjacentHTML("afterbegin",`\n        <h1>${n}</h1>`),d.innerHTML="",d.innerHTML=`${m}`,c.innerText=n,r.src=o}());const k=async function(t){try{const e=await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=${t}`),n=await e.json();if(!e.ok)throw new Error(`${n.message}`);n.forEach((t=>{m.insertAdjacentHTML("beforeend",`\n            <div class="container__content__sidebar__recipe" id="${t.id}">\n                <img id="preview-picture" src="${t.image}" alt="burrito">\n                    <h3 class="container__content__sidebar__recipe__title" id="${t.id}">${t.title}</h3>\n            </div>`)}))}catch(t){alert(t)}};m.addEventListener("click",(t=>{let e=t.target.id;!async function(t){const e=await fetch(`https://api.spoonacular.com/recipes/${t}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`),n=await e.json(),i=n.title,o=n.image,r=n.readyInMinutes,c=n.servings,h=n.instructions,f=n.extendedIngredients;s.innerHTML="",s.innerHTML=`<img id="recipe-picture" src="${o}" alt="${i}">`,p.innerHTML="",p.innerHTML=`<span>${r} </span>`,u.innerHTML="",u.innerHTML=`<span>${c} </span>`,C.push(c);let m=[];f.forEach((t=>{m.push(`${t.amount} ${t.unit} ${t.originalName}`)}));let _=[...m];l.innerHTML="",l.insertAdjacentHTML("afterbegin",`\n            <h1>${i}</h1>`),a.innerHTML="",a.insertAdjacentHTML("afterbegin",`\n            <li class="container__content__mainContent__ingredients__list__item">${_}\n        </li>`),d.innerHTML="",d.innerHTML=`${h}`}(e),async function(t){const e=await fetch(`https://api.spoonacular.com/recipes/${t}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);await e.json()}(e)})),f.addEventListener("keypress",(t=>{if("Enter"===t.key){m.innerHTML="";let t=f.value;k(t),m.style.display="flex",o.style.display="none",L.style.display="none"}})),h.addEventListener("click",(()=>{m.innerHTML="";let t=f.value;k(t),m.style.display="flex",o.style.display="none",L.style.display="none"}));let M,C=[],$=C[C.length-1],x=1,H=[];let N;m.addEventListener("click",(t=>{N=t.target.id,async function(t){const e=await fetch(`https://api.spoonacular.com/recipes/${t}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848&includeNutrition=false`),n=await e.json();$=n.servings;let i=n.extendedIngredients;H=[],i.forEach((t=>{H.push(t)}))}(N)})),v.addEventListener("click",(()=>{a.innerHTML="",C.push(parseInt(u.innerText)),$=C[C.length-1],$++,x=$/C[C.length-1],H.forEach((t=>{t.amount=t.amount*x;let e=document.createElement("LI"),n=document.createTextNode(`${t.amount.toFixed(2)} ${t.unit} ${t.name}`);e.innerText=`${n.textContent}`,a.appendChild(e)})),u.innerHTML="",u.innerHTML=`<span>${$} </span>`})),b.addEventListener("click",(()=>{a.innerHTML="",C.push(parseInt(u.innerText)),$=C[C.length-1],$>=2&&$--,M=C[C.length-1]/$,H.forEach((t=>{$>=1&&(t.amount=t.amount/M);let e=document.createElement("LI"),n=document.createTextNode(`${t.amount.toFixed(2)} ${t.unit} ${t.name}`);e.innerText=`${n.textContent}`,a.appendChild(e)})),u.innerHTML="",u.innerHTML=`<span>${$} </span>`}));
//# sourceMappingURL=index.aa574643.js.map
