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
- [ ] Create components: Card, Swimlane, SideModal, Button,
- [x] Create fake data and fetch function
- [ ] Implement drag and drop
- [ ] 
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
