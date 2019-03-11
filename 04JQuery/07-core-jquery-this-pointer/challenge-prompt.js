// `this` jQuery Business

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here
  buttonHello= $("<button>");
  buttonHello.text("Hello");
  buttonHello.append("data", "Hello")

  buttonWorld= $("<button>");
  buttonWorld.text("World");
  buttonWorld.append("data", "World")

  buttonClear= $("<button>");
  buttonClear.text("");
  buttonClear.append("data", "")

  $("#buttons-area").append(buttonHello)
  $("#buttons-area").append(buttonWorld)
  $("#user-button-area").append(buttonClear)

  // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we defined above.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here
    var buttonPressed= $("#user-button-area").attr("data");
    buttonPressed += event.key;
    $("#user-button-area").attr("data", buttonPressed);


    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here
    switch ($(this).attr("data")){
      case "Hello":
      case "World":
        $("#output").append($(this).attr("data"));
        break;
      default:
        $("#output").text($(this).attr("data"));
        $(this).attr("data", "")
    }
    // End of your code area
  })

})
