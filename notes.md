
## Types of Questions I want to add in addition to what TM already has
File Upload

## Known deficiencies or possible improvements
- Can only drag in or sort. Need to be able to do both
- Add Firebase back end?
- The hacky way I am adding question options and ratings to radio, checkbox, and grid type questions
- CSS everywhere
- Needs some serious refactoring
- Having to use !important on a CSS rule to override the default cursor rule instituted by ng2-dnd package
- Ability to put question labels and controls on separate lines. Question above and fields below
- If user includes an email address, include email address validation in the exported code
- Add preview link to see survey on its own page (good way to get Angular routing in use on this project)
- Allow user to exclude parts of address field and customize placeholder for each field
- Allow user to remove options/ratings from multi-select type fields
- Required attribute for checkboxes doesn't work the same as radio buttons in that for radio buttons for any set of buttons with the same
  name attribute, if any one of them is checked the required is fulfilled. For checkboxes, the required attribute is on a per
  checkbox basis ,so validation has to be done with JS to get the same type of experience
- Refine order of question style settings so that they are all consistent and make sense