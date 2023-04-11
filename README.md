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
- Don't add notation that is redundant e.g. `let lucky: number = 23;`
- You can also add your own types (typically in Pascal case) 
- In TS, we can enforce the shape of an object with an interface
- Strong-typing a function can be a little more complex. 
- 'void' common as a type for Event Listeners 
- Strong-typing an array 
- 'Twople'? Have not come across this before. It's a fixed-length array where each item has a fixed type. 
- Can use '?' in TS to make values optional e.g. `type MyList = [number?, string?, boolean?]` Can also use to make function arguments optional
- TS generics = lets us specify type for later on in our code e.g. `class Observable<T> {`

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
 - Has margins. If you want the column to span the whole width, use `class="container-fluid border"`
 - Or, if you want to mix it, you can use `class="container-md border"` (creates a min. width it will span across)
 - Rows = not much you can change about these
 - `.col` creates a column div
 - I can now add rows and columns!
 - How can I create columns of a set size and breakpoint? E.g `class="col-lg-8 col-md-6"`

 ### PM 
 - Have come back after lunch and am thinking it would be wise to focus on my MVP + wireframe and come back to the Bootleg tutorial once I need it in more granular detail: https://www.youtube.com/watch?v=-qfEOE4vtxE

 ### What is my MVP? ✅
 Step 1: Build a page to display all available Pokémon using the GET request. User should be able to navigate through the result in blocks of 50 (see earlier notes re: Pagination). The page must be reloadable and shareable (e.g. https://myapp.co.uk/pokemon-directory?page=4 should hydrate the UI correctly showing the Pokémon results 150-200)
 1. I need to build a page that displays all of the Pokémon. 

 Step 2: Build a page displaying information about the Pokémon using the GET request. This should be accessed by clicking a Pokémon result from Step 1. This page should be reloadable and shareable (e.g. https://myapp.co.uk/pokemon/{id} should hydrate the UI correctly with the details for the Pokémon ID in the app URL)

 It would be fun to display this in a Pokédex-style format. How do I do this? 🤔 

 Stretch Goals: Add more functionality/information to the app using additional PokéAPIs. Write a couple of tests! 

 Process:
 - I'm going to make a low-fidelity wireframe for Steps 1 + 2 in Figma, as I feel this could retrospectively inform what my MVP is. 

 ### Make Wireframe ✅
 - In Figma. Initially using laptop-sized screen for maximum space, but keeping mobile-size in mind.
 - Going to look up Pokémon styling. Pokédex is a very specific shape. Think more of a basic grid system would be good for Step 1, however. 
 - 🛎️ Found Or-Yam's Pokédex on CodePen - could be a good reference point for Step 2? https://dev.to/oryam/css-pokedex-3iln
 - Ok, have made Low-Fidelity Wireframes for Steps 1 + 2 (found in 'src/images...')


## Process (6/4/23) 

### AM

### Continuation from Yesterday:
- Could be helpful to build a component tree? Use Miro, perhaps?
- Maybe I could divide into tickets on a Trello board? (Will see how pushed for time/how many threads I need to keep count of)

### Revise CRUD principles

### Start experimenting with PokéAPi
- Spend more time researching Angular - should I be using React? If so, why? `npm start`... (see 'Deeper-dive' below) ✅
- Try out GET request in Postman - check all is working as expected ✅ (Not quite as expected: can display default 20 or change to 50 Pokémon (https://pokeapi.co/api/v2/pokemon/, https://pokeapi.co/api/v2/pokemon?offset=50&limit=50) but this endpoint doesn't seem to be working: https://pokeapi.co/api/v2/pokemon/{id or name})
- Continue Bootstrap building tutorial (using appropriate chapters: not all is applicable for MVP)

### Deeper-dive into Angular setup and creating Headers ✅
- Right, going back to Angular docs, I have npm version 8.19.2 ah. I need at least version 8.5.0 to create an Angular app. So, I need to update Node. ✅
- Going to follow the docs. npm version is now 9.5.0
- I'm a bit confused as to how much has already been made, so I'm going to follow the docs to make a new Angular app and see if/where crossover
- Have created a new app in 'src' called 'Pokedex' (couldn't put the accent on the 'e'!) ERROR message: 'this command is not available when running the Angular CLI inside a workspace'. I might try to install it a bit further up, see if that helps.
- Tried to install in 'fed-graduate-role' but same ERROR - maybe it's already installed?
- Ok, skipped that bit and cd-ed into 'app', ran `npm start` and it compiled successfully - hooray!
- ERROR 'app-header is not a known element'. Do I need to cd up? No. Have c'd out and will npm start again. Still an issue with that component. Will remove it and try steps again
- I just removed it from app.component.html and it is now compiling successfully - but is this what I need? Don't think so. 
- Looking at Angular docs, `<router-outlet></router-outlet>` is a defauly placeholder. Does this mean I need to replace it/keep it? No, it doesn't like `<app-header></app-header>`
- I'm not getting anywhere, so I'll look up how to make components in Angular.
- I'm following tutorials, typing in 'ng g c header' to the terminal but it's not working - will visit Stack Overflow
- No joy, so am going back to Angular docs and am having a go at following a YouTube tutorial so I can at least make an Angular app... it worked creating the 'Pokedex' app this time because I positioned it in the 'Codeweavers' file, rather than lower down. 
- As with the first example, ERROR message = `ng serve --open` 'ng: command not found' so looks like something to do with ng on my computer... will investigate.
- Ok, I think I now have Angular set up (found this helpful: https://stackoverflow.com/questions/58138138/angular-cli-ng-command-not-found-on-mac-os) BUT have this ERROR message: 'Warning: The current version of Node (19.8.1) is not supported by Angular'. Stack Overflow: https://stackoverflow.com/questions/69090357/ng-version-showing-the-current-version-of-node-16-8-0-is-not-supported-by-an. Also looked at: https://unpkg.com/browse/@angular/core@15.2.5/package.json
- Ok, in 'Pokedex', have run `ng serve` and all seems to working ok: 'Angular Live Development Server is listening on localhost:4200...'
- Yay! For the first time, the Angular content is showing up - I've hopefully gotten over this hump 🐪!
- It says I don't have permission: ERROR "! If you believe this might be a permissions issue, please double-check the permissions of the file and its containing directories, or try running the command again as root/Administrator.
- reading Stack Overflow docs, have tried `sudo npm install -g @angular/cli` and it looks like it worked. 
- `ng help` now works, at least! Progress!
- ok, I still want to make a Header - let's see how this goes... `ng g c header --skipTests`
- same ERROR as before: 'This command is not available when running the Angular CLI outside a workspace' - do I need to do this in 'app' then?
- 🎉🎉🎉 FINALLY DID IT!!! `ng g c header` 🎉🎉🎉 (maybe I just didn't have permission? Also, it didn't like the 'skipTests' bit)
- Ok, can I do this in the 'fed-graduate-role' file, too? Will try - YES!!
- Back to 'Pokedex' file to continue test set-up. The browser is getting confused with the two apps - maybe I'll move/delete the test app (as 'fed...' seems to be working ok now 
- YAY it's now working on port 4200 
- I think because I've already imported Bootstrap, It's not showing up the Header. In future projects, I'll get Angular set up first!
- I've commented out Bootstrap, but the page is still not showing. WARNING in Console reads: 'non-JS module files deprecated.' 
- Have commented Bootstrap back in again...

## Process (8/4/23) 

### AM

### Continuation from 6/4/23: 
- Working on figuring out bugs that pop up in the console, e.g. ERROR 'The selector "app-root" did not match any elements'. Have done some research on Stack Overflow and Reddit and have found out it might be because there is an issue with the html structure (particularly as I'd already added Bootstrap into the mix... oops!). I have managed to make this ERROR message go away by calling the HTML "app-header" but have a new one: ERROR 'The selector "app-header" did not match any elements'. Ah, opk - that's the same ERROR, just a different flavour!
- Am going to try a different name, as perhaps it's getting muddied with the Bootstrap stuff. Will try "my-app". Same issue. Says it's a problem with line 7 of main.ts `.catch(err => console.error(err));`. Reading some info on Stack Overflow, I may get more info about the error if I don't use `.catch(err => console.error(err));`. Will give it a go
- Interesting: if I get rid of lines 6 and 7 from 'main.ts', the ERROR messages disappear - is this good?! 🤔 I will stick a pin in here, as I'm not sure if getting rid of that was a good idea or not!

### Getting Data in Angular 
- Got a bit sidetracked looking up similarities between knitting and code!
- MUCH quicker at making compionents in Angular now!
- Still not showing what I need on the Live Server, so I tried to edit out all the Bootstrap stuff.
- ERROR 'src/app/services/data.service.ts:15:1 - error TS2304: Cannot find name 'getPokemons'.' 
- Have looked back at code around this and can't see any bugs, will keep working on it
- Looks like an issue with 'data.service.ts'
- Tempted at this point to start again: may be quicker! 
- This time, I'll start with the Angular app and go from there (no Bootstrap till later!)
- I'll use what I've learned so far

### PM

- Restarting, as have got in a muddle with Angular + Bootstrap

## Process (11/4/23) 👀

- Picking up from where I left off - rebooting file to do the Angular bits first!
- Here we go :) 
- Angular already installed. Installed Node.
- `ng serve`
- Oh no - some of the same errors as before: had to delete some of the later additions in Angular, e.g. 'pokemon-list' and 'services'
- It's now working! Have compiled it successfully :)
- Ok, next bit - am setting up styling for componenets, but I can't see them on my Live Server. I suspect I've linked the wrong HTML file up (think it's using index.html) but I'm not sure how to fix this. I'm following a tutorial, so I'll see if there's a screenshot of their index.html I can suss out.
- Progressing and about to do the GET request, but Live Server is now not showing anything. WARNING message reads: 'crbug/1173575, non-JS module files deprecated. (anonymous) @ VM47:6750' - will Google what this means, as I've seen it before. It's something to do with old ways of testing... ok, have fixed this ERROR. I'm getting different ERRORS now at least! 
- Now reads: 'main.ts:6 ERROR RangeError: Maximum call stack size exceeded'. This ERROR occurs when there is an infinite loop (oops). Got rid of AppRouting component to see if that helps (it doesn't). I've found this on Stack Overflow: 

### Possible cases for this error which I found:

- 2 or more modules with the same name ✅ (Think I've fixed this...)
- Wrong imports in your app.module.ts file 🤔 (I'm not sure how to check these - will investigate)
- Problem with compilation (I will try this if the above fails!)

Solution that you can try:

- for point 1, change the names and make them unique ✅
- for point 2, make sure all imports are intended as per your use case for a module, do check for inter-dependency between modules 🤔
- for point 3, rare but happens if browser doesn't have enough memory to process, so try to restart your code editor, browser or your PC.

- Reading this article on component interdependence: https://lukeliutingchun.medium.com/angular-using-component-injection-to-communicate-between-parent-and-dynamic-child-components-99c1c297aa43

- How about using NgTemplateOutlet...? https://lukeliutingchun.medium.com/angular-using-ngtemplateoutlet-to-communicate-between-parent-and-dynamic-child-components-4d74ca9ba9b

- May work better as am using the PokéAPI? 🤔

### PM

- Watching a tutorial on NgTemplateOutlet - will see if this helps 😂
- Created a 'dev' branch to help me out if I need to reset/tweak further down the line (probably should have done this earlier...)
- Making 'Pokemon-list' component, then will go back to NgTemplateOutlet guidelines. 
