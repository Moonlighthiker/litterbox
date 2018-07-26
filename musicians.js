/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
var musicians = 1;

// number of several musician constellations
var NaG     = 0;
var solo    = 1;
var duet    = 2;
var trio    = 3;
var quartet = 4;

// start loop to detect the right constellation
if (musicians < 1) {
  //print for 0 and negative integer
  console.log("This is not a group!");
} else if (musicians === 1) {
  // print for 1
  console.log("This is a solo artist.");
} else if (musicians === 2) {
  // print for 2
  console.log("This is a duet.");
} else if (musicians === 3) {
  // print for 3
  console.log("This is a trio.");
} else if (musicians === 4) {
  // print for 4
  console.log("This is a quartet.");
} else {
  // print for greater than 4
  console.log("This is a very large group.");
}

// this is the gpend of the universe. Have a nice day.
