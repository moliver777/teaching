// JAVASCRIPT CALCULATOR
// try to create a simple calculator that will add, subtract, multiply or divide two numbers and show the result

//----------
//---TODO---
//----------
// what variables will be needed globally to keep track of our calculations?
// HINT: create string variables for memory (number being used in calculation but not displayed), display (number currently shown on display) and operand (ADD,SUBTRACT,MULTIPLY,DIVIDE. which one are we using?)


// this makes sure the document is ready (the buttons have been created) before we try to attach a click event handler
$(document).ready(function() {
  // when any button is clicked, run this function
  $("button").click(function() {
    //----------
    //---TODO---
    //----------
    // get the value of the button that was clicked and store it in a variable
    // HINT: a click event will pass the element that has been clicked into itself as the local scope variable 'this'
    // HINT: you can use jquery to access the button that was clicked with $(this)
    
    
    //----------
    //---TODO---
    //----------
    // write a switch statement that will call the relevant function depending on the value of the button
    // HINT: all number buttons need to be send to the handleNumberClick. can you write the switch in a way that we only need to write the function call once?
    
    
    //----------
    //---TODO---
    //----------
    // now that the button has been handled in the previous todo, update the display to show the correct content
    // HINT: use a jquery selector to get the display element and set its value
    
  });
});

function handleClearClick() {
  //----------
  //---TODO---
  //----------
  // set all the variables you created at the top of this script to their initial values so the calculator is reset
  
}

function handleNumberClick(number) {
  //----------
  //---TODO---
  //----------
  // a number button has been clicked!
  // when calling this function like se handleNumberClick(buttonValue) we should be passing the value of the button in. so the local variable 'number' defined in the function declaration (first line of this block of code starting with the word function) is now holding the number of the button that was clicked
  // let's add it to the display variable created at the top of this script so that it will appear on the page in the display box
  // HINT: remember, the number and display variables are strings so they will not evaluate like numbers but just be concaternated like we want (added end to end)
  // Numbers:1+1=2
  // Strings:"1"+"1"="11"
  
}

function handleDecimalClick() {
  //----------
  //---TODO---
  //----------
  // the decimal button has been clicked!
  // add a decimal point to the display variable created at the top of this script
  // HINT: remember you need to add a STRING containing a decimal point to the display variable
  
}

function handleAddClick() {
  //----------
  //---TODO---
  //----------
  // the add button has been clicked!
  // 1. we'll need to store that this is the operand being used in the variable you created at the top of this script
  // 2. our display should currently be showing the first number we want to add. let's move this number to the overall value variable you created at the top of this script so we can clear the display ready for the second number
  // 3. set the current display number to empty so the display is cleared ready for the second number in our calculation
  
}

function handleEqualsClick() {
  //----------
  //---TODO---
  //----------
  // the equals button has been clicked!
  // 1. first we need to work out what the calculation is that we need to do. write and if, else if, else if statement to work out what to do
  // HINT: you'll need to check if the operand variable is equal to the value set by the handleAddClick, handleSubtractClick, etc functions
  // 2. now we know what the operand is, do the calculation.
  // HINT: the first number should be in the memory variable. the second number should be in the display variable. the answer will need to go in the display variable so that it will appear on the page in the display box
  // HINT: the variables holding the numbers to be used in the calculation are STRINGS. now that we want to evaluate them as number we'll need to parse the strings to floating point numbers
  
}

//----------
//---TODO---
//----------
// write the subtract, multiply and divide functions
// HINT: they should be almost identical to the add function!





// ----- MORE STUFF TO TRY! -----

//----------
//---TODO---
//----------
// DIFFICULTY: EASY
// can you change the handleDecimalClick function to only allow ONE decimal point to be added to the display?
// HINT: you'll need to check if a decimal already exists in the display and then use an if statement to either add the new decimal point or not



//----------
//---TODO---
//----------
// DIFFICULTY: MEDIUM
// can you add a new button in one of the empty spaces on the calculator?
// HINT: try implementing one of the javascript Math library functions. PI button that sets the display value to PI?



//----------
//---TODO---
//----------
// DIFFICULTY: HARD
// can you make this calculator chain more than two numbers and one operand together like a conventional calculator?
// HINT: when selecting an operand, you'll need to evaluate that calculation straight away and store the result in memory