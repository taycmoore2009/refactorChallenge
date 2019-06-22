#Notes

listItemComponent.js:
- Why is parseInt necssary? I can see this being needed if this was a user inputed value, but we control this, so as long as it's right from the start, we don't need to parse it. 
- Also, if we change the data type of index from something it's not expecting, we might run into issues while attempting to modify list
- Changed var to const
- Removed constructor (not needed)