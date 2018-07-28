var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

// conditional ? (if condition is true) : (if condition is false)
// also with && and ||

var elk = true;
var animal = false;
var color = "brown";
var answer = elk || /* or && */ animal ? color : "Other color.";
console.log(answer);

// || result = brown, because one of the two cases is true
// && result = other color, because one of the two cases is false.


// 'normal' If ... else.

var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);


// 'normal' if ... else if.

var ham = true;
var egg = true;
var taste;

if (ham && egg) {
taste = "What a tasty ham! What a tasty egg!"
}
else if (!ham && egg) {
taste = "What a tasty egg!"
}
else if (!egg && ham) {
taste = "What a tasty ham!"
}

console.log(taste);


// SWITCH statements

switch (4) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
}


// Days of the month in the year
// With switches
var month = 2;

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");


var animal  = "horse with tail";
var output  = "Hello!"

switch (animal) {
  case "dog":
  output += " You are a doggywoggy.";
  break;
  case "horse":
  output += " Your are a horseyworsey.";
  break;
  case "dog with tail":
  output += " You are a doggy with a fluffy tail.";
  break;
  case "horse with tail":
  output += " You are a horesy with a super hot tail.";
  break;
  default:
    output += " I don't know you species. May I pet you anyway?";
}

console.log(output);
