#Notes
First glance
- Need to break out components into their own files for easier readability
- Some functions can be moved into different components
- Uncessary constructor usage
- Can I improve the list object?
- Change `var`s
- Rename some components
- This doesn't even load, need to fix errors/warnings before proceeding to gain a better understanding of code
- Function definitions are all over the place, move all to arrow functions to remove constructor this binding and improve code consistency

TodoApp.js
- Move count into state during constructor
- Remove unused timer state
- Fix `const that=this;`, uncessary for update
- Change flow of updateTimer to use a variable for easier readability

listItemComponent.js:
- Why is `parseInt` necssary? I can see this being needed if this was a user inputed value, but we control this, so as long as it's right from the start, we don't need to parse it. 
- Also, if we change the data type of `index` from something it's not expecting, we might run into issues while attempting to modify list
- Changed `var` to `const`
- Removed `constructor` (not needed)

formComponent.js
- index was uncessary to track, also it was just wrong because you could get duplicate indexes
- new item creation should be handled in the form component instead of app enterence for easier readability

listComponent.js
- Moved list item logic into this file
- Might be better to move control of mark/unmark of list item into listItemComponent.js
- I really don't like the basic logic around class checking on the done for list items, if I have more time later I might update that but I don't want to waste more time on it already.