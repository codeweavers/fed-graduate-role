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

# Martha's Notes

    👀 = doing
    ✅ = done
    🤔 = curious/question for CWs/find out more
    🛎️ = take note, Martha!

## Process (5/4/23)

### AM

### Read through README ✅
- What does 'hydrate' mean? 🤔 
- What other Pokémon APIs are out there? 🤔 

### Set up folders in GitHub + VS Code ✅

### Read through PokéAPI documentation ✅
- What's a Wrapper Library? Creates a simple interface. 
- 🛎️ This could be handy for making sure there are 50 results on each page. Resources List/Pagination: 'If you would like to change this just add a 'limit' query parameter to the GET request, e.g. ?limit=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60.'
- 🛎️ Potential additional functionality with Abilities: http://bulbapedia.bulbagarden.net/wiki/Ability

### Research Pokédex ✅
- Basically, a Pokémon database (as I thought!). Interesting that they have 'Total' points

### Research TypeScript ✅
- Have studied a little bit on SoC bootcamp
- Compiler can catch bugs in advance
- Superset of JS
- Installing the dependencies (red squiggles have disappeared) 
- This is the version of JS it's targeting: ES2022
- Added '"watch": true,' to tsconfig.json (recompiles the code every time we save the file, means I don't have to use the 'tsc' command in the temrinal after every change)
- 2x ways you can strong-type your code: implicitly or explicitly. 
- Don't add notation that is redundant e.g. let lucky: number = 23;
- You can also add your own types (typically in Pascal case) 
- In TS, we can enforce the shape of an object with an interface
- Strong-typing a function can be a little more complex. 
- 'void' common as a type for Event Listeners 
- Strong-typing an array 
- 'Twople'? Have not come across this before. It's a fixed-length array where each item has a fixed type. 
- Can use '?' in TS to make values optional e.g. type MyList = [number?, string?, boolean?]. Can also use to make function arguments optional
- TS generics = lets us specify type for later on in our code e.g. class Observable<T> {

 ### Research Angular ✅
 - UI framework, maintained by Google
 - Component-based for building scalable apps
 - Provides collection of libraries to cover Routing + Forms e.g. React
 - Research more, M? 🤔

 ### Research Bootstrap ✅
 - CSS framework: the most popular one 
 - Bootstrap is already installed
 - Opened with Live Server and it works! (Not in default Bootstrap font, however)
 - Deviated from YouTube intro to look up Bootstrap docs. Have simplified stylesheet bit and it's now in the Bootstrap font with no errors
 - I needed to import the scripts into the HTML, I think, which I've now done. Great! No errors.
 - Have used Inspect --> Network for the 1st time and can see that popper.js is being loaded, too (do I need this? Didn't see it in the dependencies but have added, just in case 🤔)
 - Grid system (watching demo)
 - Content adjusts to screen size (don't need different versions for different devices)
 - Can see what it looks like in the Web developer section
 - Within each Row, you have 12x units
 - xl xxl etc. means the screen size
 - Breakpoints - comes with 6 predefined breakpoints (but you can customise them - but not v wise)
 - 3x elements: container, row + column
 - Has margins. If you want the column to span the whole width, use class="container-fluid border"
 - Or, if you want to mix it, you can use class="container-md border" (creates a min. width it will span across)
 - Rows = not much you can change about these
 - .col creates a column div
 - I can now add rows and columns!
 - How can I create columns of a set size and breakpoint? E.g class="col-lg-8 col-md-6"

 ### PM 
 - Have come back after lunch and am thinking it would be wise to focus on my MVP + wireframe and come back to the Bootleg tutorial once I need it in more granular detail: https://www.youtube.com/watch?v=-qfEOE4vtxE

 ### What is my MVP? 👀
 Step 1: Build a page to display all available Pokémon using the GET request. User should be able to navigate through the result in blocks of 50 (see earlier notes re: Pagination). The page must be reloadable and shareable (e.g. https://myapp.co.uk/pokemon-directory?page=4 should hydrate the UI correctly showing the Pokémon results 150-200)
 1. I need to build a page that displays all of the Pokémon. 

 Step 2: Build a page displaying information about the Pokémon using the GET request. This should be accessed by clicking a Pokémon result from Step 1. This page should be reloadable and shareable (e.g. https://myapp.co.uk/pokemon/{id} should hydrate the UI correctly with the details for the Pokémon ID in the app URL)

 Stretch Goals: Add more functionality/information to the app using additional PokéAPIs. Write a couple of tests! 

 Process:
 - I'm going to make a low-fidelity wireframe for Steps 1 + 2 in Figma, as I feel this could retrospectively inform what my MVP is. 

 ### Make Wireframe 👀
 - In Figma. Initially using laptop-sized screen for maximum space, but keeping mobile-size in mind.
 - Going to look up Pokémon styling. Pokédex is a very specific shape. Think more of a basic grid system would be good for Step 1, however. 
 - Found Or-Yam's Pokédex on CodePen - could be a good reference point for Step 2? https://dev.to/oryam/css-pokedex-3iln
 - Ok, have made Low-Fidelity Wireframes for Steps 1 + 2 (found in 'src/images...')
 - Could be helpful to build a component tree? Use Miro, perhaps?
 - Maybe I could divide into tickets on a Trello board? (Will see how pushed for time/how many threads I need to keep count of)

### Revise CRUD principles
