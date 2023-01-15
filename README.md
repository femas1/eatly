EATLY - Simple recipe app project

[OVERVIEW]

With this project I want to test my vanilla javascript skills by building a simple recipe web app. 

[MY-PROCESS]

- Created a project plan (flawchart using draw.io)

[WHAT-I-LEARNED]

- .env
- Storing data in localStorage
- Storing data as objects in localStorage using JSON.stringify() and JSON.parse()
- Preventing saving double elements in an array using .some()

[BUILT-WITH]

- Vanilla Javascript
- Dart SASS (7-1 Architecture)
- Spoonfool API 
- Bundled with Parcel
- Hosted on netlify

[KNOWN-ISSUES]

- When clicking a recipe tab in the sidebar, it won't load the recipe correctly if you click on the picture or on the recipe name (it only works when clicking in a random spot in the tab)
- When pushing recipes from localStorage into the sidebar only the recipe id is shown
- If one recipe fails to save (e.g. missing id), the "my recipe" btn will fail to load the stored recipes from localStorage