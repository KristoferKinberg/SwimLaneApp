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

## Summary
Had a lot of fun with the assignment! In retrospect, I honestly kind of feel that I should have implemented redux. 
A lot because it's something I'm familiar with, but mostly because of that I kind of feel that Recoil
lacks the scalability that redux possesses. This can of course be a result of my implementation, but redux in my mind
just feels a lot more able to handle large amounts of data to be edited. I felt this as the application grew, especially
towards the end. 

Thanks for reading and reviewing!!
// Kristofer

## Features or changes I would have liked to implement
1. Some form of statics, maybe average salary offered, successful recruitments and so on.
2. Editing of users could've used some work. For example, you can't add an image, which would've been a very easy
    thing to implement, I just remembered it to late. 
3. To continue in the same track, validation for inputs. It's kind of weird that you are able to save candidates
    without names and emails and such, regex for emails and so on.
4. One thing that is a shame I didn't find the time to do is that the pages isn't very responsive. My reasoning around
    this is mainly that I would assume that this type of application would be used on a laptop, not on a mobile phone.
   It feels like something a recruiter would use when in the office.
5. There are a few things I would have loved to implement in regard to the DnD part:
   1. When a card is dragged, it jumps in from the top of the screen. I think this has something to do with its position
        in the swim lanes aren't provided on drag start. No matter what, it looks horribly and is a needle in my eye...
   2. It would've been cool if the disallowed swim lanes would've been grayed out or something to highlight they
      are not eligible for drop. Right now there are no errors or explanation to as why a user cant skip lanes, which
      doesn't seem very user-friendly.
6. Modals could've used some love. The kind of just appear currently. Would've been nice with some transitions.
7. Sorting would've been cool. Maybe something like searching for a span in offered salary, showing only those who ended
    up being hired or the other way around, and so on. Would've loved to add something like "years of exeprience" in 
    data as well, maybe after dialog step, and then ability to sort on that also.
8. There isn't a single thing implemented in regard to accessibility. 
9. There are no test's. 
10. Would've wanted to change "edit" from being triggered by a click to instead be triggered by an icon on the card
    just like on remove.
11. I didn't manage to find much time for cleaning up and refactoring stuff. There are a few things that could be cleaned,
    like the StartView, it's a bit to messy. Then there's a few places, for example in regard to modals, where code and 
    CSS could've been reused instead. Such a shame...
12. The script for generating fetching and generating prospects is a mess. I didn't spend any time at all making that nice, 
    since it in a way isn't part of the application. In an actual application, there should of course have been an
    actual backend in its place!

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
- [x] Set restrictions when moving to finished, prompt result.
- [x] Add ability to remove.
- [x] Indicate result for finished lane, hired or not.
- [ ] Implement validation for inputs
- [x] Prevent moving several lanes at once.
- [x] Prompt on removal of prospect.

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

Few components have been made, Card and SwimLane. Not sure about design. Will leave it for 
now and return to design part later. Will focus on getting drag and drop
functionality properly implemented.

--- 

Drag and drop got paused. Decided to get most of the UI in place first and add
functionality later. Created new "Drawer" component. If there is time, I will animate
it as well. Also cleaned the data a bit. Only fetching data that I use now.
Might reformat it a little as well.
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

Drag and drop implemented. Since time is running out, I'm going to mainly focus on requested features before I start
getting creative. Do want some time to clean stuff up as well. Hope to find time to put some 
restrictions in drag and drop as well. for example, I would like to restrict the moving 
of a prospect across several swim lanes. It should be a stepped process. As it works currently,
it will be difficult to stop user from moving from for example 'dialog' straight to 'finished'.
If there is implementation in place for setting offer, this will in that case be completely skipped.
A problem for future me! 

---

Search and remove implemented as well! This is great, because it means all requested features
have been implemented. Next thing I will implement will be 'offer' functionality. In other words,
when a user moves a prospect from 'interview' to 'offer', app should prompt user to insert what
has been offered for candidate. Having offer could be fun, since you could start showing statistics
and stuff! Doubt I will have time for implementing that however...

--- 

Okay, so I got the modal for adding offer in place, it works, all is well! Now I want to 
add the restriction of skipping lanes! I have an idea, but also very little time. We'll se 
what I can get done! As mentioned earlier, I would like some time to clean things up as well. 

--- 

I now have a modal making sure that you don't delete stuff accidentally. If I had more time, I would refactor 
the modals. They ended up being a lot of duplicated code which is a shame. Would have loved to implement some form
of higher order component to keep it DRY.

---

Prevention of lane-skipping implemented! Works kind of neat, would however love to make the "disallowed" greyed out 
or lowered their opacity or whatever, to show they are not droppable. However, want to focus on adding some indication 
of result for the "finished" swim lane and then finish it all up with some cleaning of the code. We'll see what we'll 
manage! 


--- 

Last code-related commit has been made. I did manage to implement a prompt for adding recruitment result as well. 
result is also shown represented in prospect-card with a green or red dot. I've had a lot of fun with the assignment,
to a large extent because of the techniques that I've not used before (Recoil & DnD) which has been fun to experiment.

--- 

I will create a "known bugs & issues" or "summary" or something of what more I've liked to implement but didn't have time to! 

Cheers!
