EATLY - Simple recipe app project

[OVERVIEW]

With this project I want to test my vanilla javascript skills by building a simple recipe web app. 

[WHAT-I-LEARNED]

- Storing data in localStorage
- Storing data as objects in localStorage using JSON.stringify() and JSON.parse()
- Preventing saving double elements in an array using .some()
- How to format a number with two decimals using toFixed()
- How to bundle the code for production deploy using parcel

[BUILT-WITH]

- Vanilla Javascript
- Dart SASS (7-1 Architecture)
- Spoonfool API 
- Bundled with Parcel
- Hosted on netlify

[KNOWN-ISSUES]

- THe API key is public
- User cannot remove recipes from stored recipes

[TROUBLES]

- One of the biggest troubles I encountered while coding was creating the Javascript logic for incrementing the ingredients. First I came out with the ratio between servings and ingredients. My problem was that when incrementing the ingredients, I was always making an API call so I was not updating the amounts but applying the increment value to the standard amount from the recipe. The solution was to retrieve and put the needed information (ingredient object = amount, name, etc.) into an external array already when clicking on a recipe tab. Clicking on the + button would now update the array without calling the api anymore.
