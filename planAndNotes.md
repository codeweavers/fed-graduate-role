# Points to consider:
- Responsive design (start building mobile view first)
- Accessibility (colors, buttons, arias, etc) 
- User experience (simple flow)
- Reusable components (button, card possibly?)
-Small deliverables for rapid release (MVP)


## PLAN

# DESIGN: 
- Wireframe
- Plan colour scheme and accessibility considerations
- Bootstrap components - look into them!
    - responsvie image sizing
- Use Neumorphism and CSS  resources
- UiService?
- Conditional formatting 
- Look into: Modals that have URLs -> https://netbasal.com/give-your-modals-url-address-with-auxiliary-routes-in-angular-eb76497c0bca:


FUNCTIONALITY:
- DONE - Do research and tutorials on Angular to get a sense of the new framework and have a simple project to reference.
- Do research into boostrap as this will affect the direction of the design 
- play around in repo to see how it' fitting together
- Check boostrap setup in repo (ref here https://www.freecodecamp.org/news/how-to-add-bootstrap-css-framework-to-an-angular-application/)
- Component tree
- Data flow diagram 
- Build simple prototype to test whether I've got enough understanding to get going
- DONE - Set up router
- Set up skeleton components:
    - display
    - result card
    - result detail
    - header
    - footer
- Pagination for display of results https://www.youtube.com/watch?v=ov9UqIEa8Zs 
- Set up dynamic routing:
    - NB: these routes must be SHAREABLE! I.e., not depend on historical navigation (missed this on first attempt)
    - They must render pokemon data dynamically 
    
- Look into the tests that Angular spins up automatically
- wildcard routing for 404 page
- Deploy!


RESOURCES
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Tried to install ng-boostrap widget package for angular this https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap But depnedency onflicts - research this later

TO-DO//BUGS:
- Change anchor tag to button compontent (how to combine dynamic routing functinoality with the button)
- BUG: currently loses data in detail page if you hit refresh, because it's passed down through history. Intead, run ANOTHER API call using ID?
- BUG: first fifty paginated are missing. Is there default set?
- FUNCTIONALITY: pagination is not correct. 
- PERFORMANCE: is making individual API calls the best solution for detail pages? Possibly not, assume there's a way of using fullSet data - look into this for refactoring. 



- Cannot pass data through the history state object as the page then does not hydrate if the URL is shared. So currently the version I have will run an API call using the name in the parameter

- Same issue for paginatino as I've currently resolved it for the prototype - it's not shareable. So, try a similar approach where a specific API cann is made from  pre-batched set of pagination buttons that are each coded to make a specific API call with amount and offset specified in params (using the number of that page) 
    - add new function to pokemon service that calls for specific amount with specific offset
    - create a pagination component
    - this component uses ngFor to loop over numbers 1-(fullSet.length/50) and for each one creates a button of number i, that when you press it links through to a dynamically rendered results page where the getBPokemonBatch function is called and that batch is rendered in the display.
    - This pagination is not PART of the results, it is a componet above the header? The cpnditional rendering necessary for 



- change background depending on type of pokemon
- Find way to capitalise first letters of pokemon name 
- Clean up dat amore generall: e.g., weight, height
- Get held items displaying as images

Additional features:
- Filter by type
