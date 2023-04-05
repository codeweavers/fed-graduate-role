# PokéAPI Directory 

## Prerequisite
This task needs to be completed using both Angular and Bootstrap (already included in package.json).  

You can install additional packages if you desire.

There are no wireframes or designs attached, use your own creative flair!

## Brief
Using the [PokéAPI](https://pokeapi.co/docs/v2) we would like you to create a Pokémon directory allowing users to browse all available Pokémon.

### Minimum Requirements
Build an SPA to list all available Pokémon and view each in greater detail.

#### Step 1
 Use the [GET https://pokeapi.co/api/v2/pokemon/{id or name}/](https://pokeapi.co/docs/v2#pokemon) to build a page that will list all available Pokémon.
 
_**Hint**: This API can be called without an `{id or name}` to return a paginated resource list, see more information on that [here](https://pokeapi.co/docs/v2#resource-listspagination-section)._

- This page should allow the user to navigate through the result in blocks of 50.
- This page should be reloadable and shareable. For example, sharing or reloading `https://myapp.co.uk/pokemon-directory?page=4` should hydrate the UI correctly showing the Pokémon results 150-200.

#### Step 2
Use the [GET https://pokeapi.co/api/v2/pokemon/{id or name}/](https://pokeapi.co/docs/v2#pokemon) to build a page displaying information about the Pokémon.
- This page should be accessed by clicking a Pokémon result from step 1.
- This page should be reloadable and shareable. For example, sharing or reloading `https://myapp.co.uk/pokemon/{id}` should hydrate the UI correctly with the details for the Pokémons ID in the app URL.

### Non Mandatory Requirements
If you're enjoying the task and want to show off, use any other additional PokéAPI(s) to add more functionality and/or information to your application. 


### Getting Started
#### Install Dependencies
`npm install`
#### Serve Project
`ng serve`

This is the easiest way to run and develop your app locally.

## Martha's Notes

👀 = doing
✅ = done
🤔 = curious/question for CWs/find out more
🛎️ = take note, Martha!

### Process (5/4/23)

 • Read through README ✅
 🤔 What does 'hydrate' mean?
 🤔 What other Pokémon APIs are out there? 

 • Set up folders in GitHub + VS Code ✅

 • Read through PokéAPI documentation 
 🤔 What's a Wrapper Library? Creates a simple interface. 
 🛎️ This could be handy for making sure there are 50 results on each page. Resources List/Pagination: 'If you would like to change this just add a 'limit' query parameter to the GET request, e.g. ?limit=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60.'
 🛎️ Potential additional functionality with Abilities: http://bulbapedia.bulbagarden.net/wiki/Ability


 • Research Pokédex

 • Research TypeScript

 • Research Angular

 • Research Bootstrap

 • What is my MVP?

 • Make Wireframe
