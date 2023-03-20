# Plan

## Data seed
From https://randomuser.me/
```
{
    "seed": "e715718ea21d4cf5",
    "results": 150,
    "page": 1,
    "version": "1.4"
}
```


## Todo:

- [x] Add libs.
- [ ] Create basic layout.
- [ ] Create components: Card, Swimlane, SideModal, Button, Drawer
- [x] Create fake data and fetch function
- [ ] Implement drag and drop
- [ ] Implement "edit user" functionality
- [ ] 
- [ ] 

# Log

Will use styled components for styling, thinking of use redux for state 
management but might try something smaller and more nimble. 

---

Created a node script holding functions for fetching data from api, 
and for extending fetched data to match application features. 
Script creates a JSON-file that holds the data and is then loaded by
application through mocked "api-request", this to avoid hitting
request limits.

---

Few components have been made, Card and Swimlane. Not sure about design. Will leave it for 
now and return to design part later. Will focus on getting drag and drop
functionality properly implemented.

--- 

Drag and drop got paused. Decided to get most of the UI in place first and add
functionality later. Created new "Drawer" component. If there is time, I will animate
it aswell. Also cleaned the data a bit. Only fetching data that I use now.
Might reformat it a little bit aswell.
Still thinking if I should implement redux. Might use context instead however.

