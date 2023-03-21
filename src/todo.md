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
- [x] Implement drag and drop
- [x] Create fake API requests implementing localstorage for persistent state.
- [x] Implement "edit user" functionality
- [x] Implement "create user" functionality
- [ ] Implement search
- [ ] Implement sort
- [ ] Set restrictions when moving to offer, prompt offer.
- [ ] Add ability to remove.
- [ ] Indicate result for finished lane, hired or not.

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

--- 

Decided to give Recoil a try for state management! Worked like a charm. Redux feels a bit overkill for an 
application as small as this one, and been wanting to try Recoil anyway. It seemed like a lot more suiting option
for this application. Tried to combine encapsulate it nicely within hooks. Not sure how it will turn out, but 
kind of like it so far! 

---

Made fake API request and implemented localStorage usage. It's now possible to create and update new prospects. 
If there is time left, i will implement delete as well. Mostly UI part that might take time.

---

Had some issues with drag and drop, which turned out to be 

--- 

Drag and drop implemented. Since time is running out, I'm going to mainly focus on requested features before we start
getting creative. Do want some time to clean stuff up as well.
