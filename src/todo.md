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
- [x] Create basic layout.
- [x] Create components: Card, Swimlane, SideModal, Button, Drawer, Modal
- [x] Create fake data and fetch function
- [x] Implement drag and drop
- [x] Create fake API requests implementing localstorage for persistent state.
- [x] Implement "edit user" functionality
- [x] Implement "create user" functionality
- [x] Implement search
- [ ] Implement sort
- [x] Set restrictions when moving to offer, prompt offer.
- [ ] Set restrictions when moving to finished, prompt result.
- [x] Add ability to remove.
- [ ] Indicate result for finished lane, hired or not.
- [ ] Implement validation for inputs
- [ ] Prevent moving several lanes at once.
- [ ] Prompt on removal of prospect.

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

Had some issues with drag and drop, which turned out to be errors in my somewhat hacky script
for faking the backend. It's fixed though! 

--- 

Drag and drop implemented. Since time is running out, I'm going to mainly focus on requested features before we start
getting creative. Do want some time to clean stuff up as well. Hope to find time to put some 
restrictions in drag and drop as well. for example, I would like to restrict the moving 
of a prospect across several swim lanes. It should be a stepped process. As it works currently,
it will be difficult to stop user from moving from for example 'dialog' straight to 'finished'.
If there is implementation in place for setting offer, this will in that case be completly skipped.
A problem for future me! 

---

Search and remove implemented as well! This is great, because it means all requested features
have been implemented. Next thing I will implement will be 'offer' functionality. In other words,
when a user moves a prospect from 'interview' to 'offer', app should prompt user to insert what
has been offered for candidate. Having offer could be fun, since you could start showing statistics
and stuff! Doubt I will have time for implementing that however..

--- 

Okay, so we got the modal for adding offer in place, it works, all is well! Now we want to 
add the restriction of skipping lanes! I have an idea, but also very little time. We'll se 
what we can get done! As mentioned earlier, I would like some time to clean things up as well. 
