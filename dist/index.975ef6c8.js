// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _toastifyJs = require("toastify-js");
var _toastifyJsDefault = parcelHelpers.interopDefault(_toastifyJs);
var _toastifyCss = require("toastify-js/src/toastify.css");
"use strict";
// require('dotenv').config();
// const apiKey = process.env.API_KEY;
const recipeContainer = document.querySelector(".container__content__mainContent");
const recipePictureContainer = document.querySelector(".container__content__mainContent__dishPicture");
const recipePicture = document.getElementById("recipe-picture");
const ingredientContainer = document.querySelector(".container__content__mainContent__ingredients__list");
const ingredientContainerItem = document.querySelector(".container__content__mainContent__ingredients__list__item");
const previewPicture = document.getElementById("preview-picture");
const recipeTitleEl = document.querySelector(".container__content__sidebar__recipe__title");
const recipeTitleMain = document.querySelector(".container__content__mainContent__title");
const recipeDirections = document.querySelector(".container__content__mainContent__directions__text");
const cookingTime = document.querySelector(".container__content__mainContent__dishInfo__time span");
const recipeServings = document.querySelector(".container__content__mainContent__dishInfo__servings span");
const searchBtn = document.getElementById("submitButton");
const searchBarInput = document.getElementById("searchRecipe");
const sidebar = document.querySelector(".container__content__sidebar");
const saveRecipeBtn = document.querySelector(".container__header__buttons__addRecipe.btn");
const saveRecipeBtnInRecipe = document.querySelector(".container__content__mainContent__dishInfo__saveBtn");
const savedRecipesBtn = document.querySelector(".container__header__buttons__savedRecipes.btn");
const incrementServingsBtn = document.querySelector(".incrementBtn");
const decrementServingsBtn = document.querySelector(".decrementBtn");
let tempId = [];
sidebar.addEventListener("click", (e)=>{
    let recipeId = e.target.id;
    let recipeTitle = e.target.innerText;
    let recipeImage;
    if (e.target.tagName === "DIV") recipeImage = e.target.firstElementChild.src;
    else if (e.target.tagName === "H3") recipeImage = e.target.previousElementSibling.src;
    tempId.push({
        id: recipeId,
        title: recipeTitle,
        image: recipeImage
    });
});
let savedRecipes = [];
const storeRecipe = ()=>{
    let lastClickedRecipe = tempId.slice(-1);
    if (savedRecipes.some((recipe)=>recipe[0].id === lastClickedRecipe[0].id)) alert("Recipe already saved.");
    else {
        savedRecipes.push(lastClickedRecipe);
        // SHOW TOAST NOTIFICATION 
        (0, _toastifyJsDefault.default)({
            text: "Recipe successfully saved.",
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)"
            },
            onClick: function() {} // Callback after click
        }).showToast();
        // TOAST NOTIFICATION END
        // STORE RECIPES IN LOCAL STORAGE 
        let savedRecipesSerialized = JSON.stringify(savedRecipes);
        localStorage.setItem("savedRecipes", savedRecipesSerialized);
    }
};
saveRecipeBtn.addEventListener("click", storeRecipe);
saveRecipeBtnInRecipe.addEventListener("click", storeRecipe);
// GETTING MY RECIPES (STORED RECIPES)
// PUT RECIPES INTO SIDEBAR FROM LOCALSTORAGE
const getSavedRecipes = ()=>{
    // CONVERT STRING FROM LOCALSTORAGE TO ARRAY LIKE STRUCTURE
    let localStorageRecipesDeserialized = JSON.parse(localStorage.getItem("savedRecipes"));
    console.log(localStorageRecipesDeserialized);
    sidebar.innerHTML = "";
    // LOOPING OVER ARRAY AND CREATE A LIST OF STORED RECIPES AND PUSH INTO SIDEBAR
    localStorageRecipesDeserialized.forEach((recipeArray)=>{
        sidebar.insertAdjacentHTML("beforeend", `
           <div class="container__content__sidebar__recipe" id="${recipeArray[0].id}">
               <img id="preview-picture" src="${recipeArray[0].image}" alt="${recipeArray[0].title}">
                   <h3 class="container__content__sidebar__recipe__title">${recipeArray[0].title}</h3>
           </div>`);
    });
};
savedRecipesBtn.addEventListener("click", getSavedRecipes);
const getRecipeId = async function(id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();
};
// GETTING A RANDOM RECIPE 
const getRandRecipe = async function() {
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
    });
    // INSERTING IMAGE 
    recipePictureContainer.innerHTML = "";
    recipePictureContainer.innerHTML = `<img id="recipe-picture" src="${recipeImage}" alt="${recipeTitle}">`;
    // INSERTING COOKING TIME
    cookingTime.innerHTML = "";
    cookingTime.innerHTML = `<span>${readyIn} </span>`;
    // INSERTING SERVINGS 
    recipeServings.innerHTML = "";
    recipeServings.innerHTML = `<span>${servings} </span>`;
    tempServings.push(servings);
    // INSERTING INGREDIENTS  
    extIngredients.forEach((ingredient)=>{
        currentIngredients.push(ingredient);
        let ingredientItem = document.createElement("LI");
        let ingredientItemContent = document.createTextNode(`${ingredient.amount.toFixed(2)} ${ingredient.unit} ${ingredient.name}`);
        ingredientItem.innerText = `${ingredientItemContent.textContent}`;
        ingredientContainer.appendChild(ingredientItem);
    });
    // INSERTING TITLE  
    recipeTitleMain.innerHTML = "";
    recipeTitleMain.insertAdjacentHTML("afterbegin", `
        <h1>${recipeTitle}</h1>`);
    // INSERTING DIRECTIONS
    recipeDirections.innerHTML = "";
    recipeDirections.innerHTML = `${instructions}`;
    // INSERTING TITLE INTO SIDEBAR TAB
    recipeTitleEl.innerText = recipeTitle;
    previewPicture.src = recipeImage;
};
// GETTING A RANDOM RECIPE END
window.addEventListener("DOMContentLoaded", getRandRecipe());
const searchRecipes = async function(ingredient) {
    try {
        const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=b69e38af682b4e7fa423de0c87c3e848&ingredients=${ingredient}`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}`);
        data.forEach((recipe)=>{
            sidebar.insertAdjacentHTML("beforeend", `
            <div class="container__content__sidebar__recipe" id="${recipe.id}">
                <img id="preview-picture" src="${recipe.image}" alt="burrito">
                    <h3 class="container__content__sidebar__recipe__title" id="${recipe.id}">${recipe.title}</h3>
            </div>`);
        });
    } catch (err) {
        alert(err);
    }
};
// SEARCH RECIPE BY ID
const searchRecipeById = async function(id) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848`);
    const data = await res.json();
    const title = data.title;
    const image = data.image;
    const readyIn = data.readyInMinutes;
    const servings = data.servings;
    const instructions = data.instructions;
    const extIngredients = data.extendedIngredients;
    // INSERTING IMAGE 
    recipePictureContainer.innerHTML = "";
    recipePictureContainer.innerHTML = `<img id="recipe-picture" src="${image}" alt="${title}">`;
    // INSERTING COOKING TIME
    cookingTime.innerHTML = "";
    cookingTime.innerHTML = `<span>${readyIn} </span>`;
    // INSERTING SERVINGS 
    recipeServings.innerHTML = "";
    recipeServings.innerHTML = `<span>${servings} </span>`;
    tempServings.push(servings);
    // INSERTING INGREDIENTS  
    let ingredientList = [];
    extIngredients.forEach((ingredient)=>{
        ingredientList.push(`${ingredient.amount} ${ingredient.unit} ${ingredient.originalName}`);
    });
    let allIngredients = [
        ...ingredientList
    ];
    recipeTitleMain.innerHTML = "";
    recipeTitleMain.insertAdjacentHTML("afterbegin", `
            <h1>${title}</h1>`);
    // INSTEAD OF A SINGLE LI, add one li for each ingredient
    ingredientContainer.innerHTML = "";
    ingredientContainer.insertAdjacentHTML("afterbegin", `
            <li class="container__content__mainContent__ingredients__list__item">${allIngredients}
        </li>`);
    // INSERTING DIRECTIONS
    recipeDirections.innerHTML = "";
    recipeDirections.innerHTML = `${instructions}`;
// console.log(tempServings)
// console.log(`CURRENT SERVINGS: ${tempServings}`)
};
sidebar.addEventListener("click", (e)=>{
    let recipeId = e.target.id;
    searchRecipeById(recipeId);
    getRecipeId(recipeId);
// getRecipeInformation(recipeId);
});
// BASIC SEARCH IN SEARCH BAR
// 1. ADD error handling (eg. if the input is empty -> alert or notify user, a recipe at least three words should be entered)
// 2. DRY: include repeated code inside of a function!
searchBarInput.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        sidebar.innerHTML = "";
        let query = searchBarInput.value;
        searchRecipes(query);
    }
});
searchBtn.addEventListener("click", ()=>{
    sidebar.innerHTML = "";
    let query = searchBarInput.value;
    searchRecipes(query);
});
// ADJUST SERVINGS
let tempServings = [];
let currentServings = tempServings[tempServings.length - 1];
let incrementValue = 1;
let decrementValue;
let currentIngredients = [];
const getRecipeInformation = async function(currentRecipeId) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${currentRecipeId}/information?apiKey=b69e38af682b4e7fa423de0c87c3e848&includeNutrition=false`);
    const data = await res.json();
    currentServings = data.servings;
    let ingredients = data.extendedIngredients;
    currentIngredients = [];
    ingredients.forEach((ingredient)=>{
        currentIngredients.push(ingredient);
    });
};
let clickedRecipeId;
sidebar.addEventListener("click", (e)=>{
    clickedRecipeId = e.target.id;
    getRecipeInformation(clickedRecipeId);
// console.log(currentIngredients)
});
incrementServingsBtn.addEventListener("click", ()=>{
    ingredientContainer.innerHTML = "";
    tempServings.push(parseInt(recipeServings.innerText));
    currentServings = tempServings[tempServings.length - 1];
    currentServings++;
    incrementValue = currentServings / tempServings[tempServings.length - 1];
    currentIngredients.forEach((ingredient)=>{
        ingredient.amount = ingredient.amount * incrementValue;
        let ingredientItem = document.createElement("LI");
        let ingredientItemContent = document.createTextNode(`${ingredient.amount.toFixed(2)} ${ingredient.unit} ${ingredient.name}`);
        ingredientItem.innerText = `${ingredientItemContent.textContent}`;
        ingredientContainer.appendChild(ingredientItem);
    });
    recipeServings.innerHTML = "";
    recipeServings.innerHTML = `<span>${currentServings} </span>`;
    console.log(currentServings);
});
decrementServingsBtn.addEventListener("click", ()=>{
    ingredientContainer.innerHTML = "";
    tempServings.push(parseInt(recipeServings.innerText));
    currentServings = tempServings[tempServings.length - 1];
    if (currentServings >= 2) currentServings--;
    decrementValue = tempServings[tempServings.length - 1] / currentServings;
    currentIngredients.forEach((ingredient)=>{
        if (currentServings >= 1) ingredient.amount = ingredient.amount / decrementValue;
        let ingredientItem = document.createElement("LI");
        let ingredientItemContent = document.createTextNode(`${ingredient.amount.toFixed(2)} ${ingredient.unit} ${ingredient.name}`);
        ingredientItem.innerText = `${ingredientItemContent.textContent}`;
        ingredientContainer.appendChild(ingredientItem);
    });
    recipeServings.innerHTML = "";
    recipeServings.innerHTML = `<span>${currentServings} </span>`;
});

},{"toastify-js":"96k49","toastify-js/src/toastify.css":"943FW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"96k49":[function(require,module,exports) {
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */ (function(root, factory) {
    if (module.exports) module.exports = factory();
    else root.Toastify = factory();
})(this, function(global) {
    // Object initialization
    var Toastify = function(options) {
        // Returning a new init object
        return new Toastify.lib.init(options);
    }, // Library version
    version = "1.12.0";
    // Set the default global options
    Toastify.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: undefined,
        duration: 3000,
        selector: undefined,
        callback: function() {},
        destination: undefined,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: "",
        backgroundColor: "",
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function() {},
        offset: {
            x: 0,
            y: 0
        },
        escapeMarkup: true,
        ariaLive: "polite",
        style: {
            background: ""
        }
    };
    // Defining the prototype of the object
    Toastify.lib = Toastify.prototype = {
        toastify: version,
        constructor: Toastify,
        // Initializing the object with required parameters
        init: function(options) {
            // Verifying and validating the input object
            if (!options) options = {};
            // Creating the options object
            this.options = {};
            this.toastElement = null;
            // Validating the options
            this.options.text = options.text || Toastify.defaults.text; // Display message
            this.options.node = options.node || Toastify.defaults.node; // Display content as node
            this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
            this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
            this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
            this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
            this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
            this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
            this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
            this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
            this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
            this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
            this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
            this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
            this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
            this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
            this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
            this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
            this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
            this.options.style = options.style || Toastify.defaults.style;
            if (options.backgroundColor) this.options.style.background = options.backgroundColor;
            // Returning the current object for chaining functions
            return this;
        },
        // Building the DOM element
        buildToast: function() {
            // Validating if the options are defined
            if (!this.options) throw "Toastify is not initialized";
            // Creating the DOM object
            var divElement = document.createElement("div");
            divElement.className = "toastify on " + this.options.className;
            // Positioning toast to left or right or center
            if (!!this.options.position) divElement.className += " toastify-" + this.options.position;
            else // To be depreciated in further versions
            if (this.options.positionLeft === true) {
                divElement.className += " toastify-left";
                console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.");
            } else // Default position
            divElement.className += " toastify-right";
            // Assigning gravity of element
            divElement.className += " " + this.options.gravity;
            if (this.options.backgroundColor) // This is being deprecated in favor of using the style HTML DOM property
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
            // Loop through our style object and apply styles to divElement
            for(var property in this.options.style)divElement.style[property] = this.options.style[property];
            // Announce the toast to screen readers
            if (this.options.ariaLive) divElement.setAttribute("aria-live", this.options.ariaLive);
            // Adding the toast message/node
            if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) // If we have a valid node, we insert it
            divElement.appendChild(this.options.node);
            else {
                if (this.options.escapeMarkup) divElement.innerText = this.options.text;
                else divElement.innerHTML = this.options.text;
                if (this.options.avatar !== "") {
                    var avatarElement = document.createElement("img");
                    avatarElement.src = this.options.avatar;
                    avatarElement.className = "toastify-avatar";
                    if (this.options.position == "left" || this.options.positionLeft === true) // Adding close icon on the left of content
                    divElement.appendChild(avatarElement);
                    else // Adding close icon on the right of content
                    divElement.insertAdjacentElement("afterbegin", avatarElement);
                }
            }
            // Adding a close icon to the toast
            if (this.options.close === true) {
                // Create a span for close element
                var closeElement = document.createElement("button");
                closeElement.type = "button";
                closeElement.setAttribute("aria-label", "Close");
                closeElement.className = "toast-close";
                closeElement.innerHTML = "&#10006;";
                // Triggering the removal of toast from DOM on close click
                closeElement.addEventListener("click", (function(event) {
                    event.stopPropagation();
                    this.removeElement(this.toastElement);
                    window.clearTimeout(this.toastElement.timeOutValue);
                }).bind(this));
                //Calculating screen width
                var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
                // Adding the close icon to the toast element
                // Display on the right if screen width is less than or equal to 360px
                if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) // Adding close icon on the left of content
                divElement.insertAdjacentElement("afterbegin", closeElement);
                else // Adding close icon on the right of content
                divElement.appendChild(closeElement);
            }
            // Clear timeout while toast is focused
            if (this.options.stopOnFocus && this.options.duration > 0) {
                var self = this;
                // stop countdown
                divElement.addEventListener("mouseover", function(event) {
                    window.clearTimeout(divElement.timeOutValue);
                });
                // add back the timeout
                divElement.addEventListener("mouseleave", function() {
                    divElement.timeOutValue = window.setTimeout(function() {
                        // Remove the toast from DOM
                        self.removeElement(divElement);
                    }, self.options.duration);
                });
            }
            // Adding an on-click destination path
            if (typeof this.options.destination !== "undefined") divElement.addEventListener("click", (function(event) {
                event.stopPropagation();
                if (this.options.newWindow === true) window.open(this.options.destination, "_blank");
                else window.location = this.options.destination;
            }).bind(this));
            if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") divElement.addEventListener("click", (function(event) {
                event.stopPropagation();
                this.options.onClick();
            }).bind(this));
            // Adding offset
            if (typeof this.options.offset === "object") {
                var x = getAxisOffsetAValue("x", this.options);
                var y = getAxisOffsetAValue("y", this.options);
                var xOffset = this.options.position == "left" ? x : "-" + x;
                var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
                divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
            }
            // Returning the generated element
            return divElement;
        },
        // Displaying the toast
        showToast: function() {
            // Creating the DOM object for the toast
            this.toastElement = this.buildToast();
            // Getting the root element to with the toast needs to be added
            var rootElement;
            if (typeof this.options.selector === "string") rootElement = document.getElementById(this.options.selector);
            else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== "undefined" && this.options.selector instanceof ShadowRoot) rootElement = this.options.selector;
            else rootElement = document.body;
            // Validating if root element is present in DOM
            if (!rootElement) throw "Root element is not defined";
            // Adding the DOM element
            var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
            rootElement.insertBefore(this.toastElement, elementToInsert);
            // Repositioning the toasts in case multiple toasts are present
            Toastify.reposition();
            if (this.options.duration > 0) this.toastElement.timeOutValue = window.setTimeout((function() {
                // Remove the toast from DOM
                this.removeElement(this.toastElement);
            }).bind(this), this.options.duration); // Binding `this` for function invocation
            // Supporting function chaining
            return this;
        },
        hideToast: function() {
            if (this.toastElement.timeOutValue) clearTimeout(this.toastElement.timeOutValue);
            this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function(toastElement) {
            // Hiding the element
            // toastElement.classList.remove("on");
            toastElement.className = toastElement.className.replace(" on", "");
            // Removing the element from DOM after transition end
            window.setTimeout((function() {
                // remove options node if any
                if (this.options.node && this.options.node.parentNode) this.options.node.parentNode.removeChild(this.options.node);
                // Remove the element from the DOM, only when the parent node was not removed before.
                if (toastElement.parentNode) toastElement.parentNode.removeChild(toastElement);
                // Calling the callback function
                this.options.callback.call(toastElement);
                // Repositioning the toasts again
                Toastify.reposition();
            }).bind(this), 400); // Binding `this` for function invocation
        }
    };
    // Positioning the toasts on the DOM
    Toastify.reposition = function() {
        // Top margins with gravity
        var topLeftOffsetSize = {
            top: 15,
            bottom: 15
        };
        var topRightOffsetSize = {
            top: 15,
            bottom: 15
        };
        var offsetSize = {
            top: 15,
            bottom: 15
        };
        // Get all toast messages on the DOM
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;
        // Modifying the position of each toast element
        for(var i = 0; i < allToasts.length; i++){
            // Getting the applied gravity
            if (containsClass(allToasts[i], "toastify-top") === true) classUsed = "toastify-top";
            else classUsed = "toastify-bottom";
            var height = allToasts[i].offsetHeight;
            classUsed = classUsed.substr(9, classUsed.length - 1);
            // Spacing between toasts
            var offset = 15;
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            // Show toast in center if screen with less than or equal to 360px
            if (width <= 360) {
                // Setting the position
                allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
                offsetSize[classUsed] += height + offset;
            } else if (containsClass(allToasts[i], "toastify-left") === true) {
                // Setting the position
                allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
                topLeftOffsetSize[classUsed] += height + offset;
            } else {
                // Setting the position
                allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
                topRightOffsetSize[classUsed] += height + offset;
            }
        }
        // Supporting function chaining
        return this;
    };
    // Helper function to get offset.
    function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
            if (isNaN(options.offset[axis])) return options.offset[axis];
            else return options.offset[axis] + "px";
        }
        return "0px";
    }
    function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") return false;
        else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) return true;
        else return false;
    }
    // Setting up the prototype for the init object
    Toastify.lib.init.prototype = Toastify.lib;
    // Returning the Toastify function to be assigned to the window object/module
    return Toastify;
});

},{}],"943FW":[function() {},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire27a3")

//# sourceMappingURL=index.975ef6c8.js.map
