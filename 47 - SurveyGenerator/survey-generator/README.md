### Survey Generator

- create numerous inputs and submit buttons

- to add another question you need access to questions array. you need the target value in the input and you need to add one that value to the existing array.

- now i need to add functionality to the Take Survey button
  - when clicked, hide the original input and buttons (build survey section) and show the questions that were made as <p> tags
    - will need to store the inputs from build section in useState array to then plug into the <p> in the answer section
  - add an input after each question for the user to answer
  - add a submit button at the end of the survey to submit all answers
  - alert a "thank you for your time" message and revert back to the building section
