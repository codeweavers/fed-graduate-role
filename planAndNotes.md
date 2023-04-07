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