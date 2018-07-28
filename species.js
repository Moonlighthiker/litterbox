/*
    A short Q/A Game to identify your species.
    Just for fun.
*/

// Let's say for example you're a kangaroo in this session.

var answer      = false;

// species categories
var mammal    = true;
var amphibian = false;
var reptile   = false;
var insect    = false;
var birds     = false;

//  how much legs?
var quadruPed = false;

// with pouch?
var marsupial = true;

// fur y/n?
var withFur   = true;

// what do you stand for? ... just kidding :P
var paws      = true;

// got tail?
var hasTail   = true;

// what kind of tail?
var longTail  = true;

// got wings?
var hasWings  = true;

while (!answer) {
  if (mammal) {
    else if (amphibian) {
      if (quadruPed) {
        if (marsupial) {
          if (withFur) {
            if (paws) {
              if (hasTail) {
                if (longTail) {
                  if (hasWings) {
                    console.log("You're a amphibian with wings.");
                    answer = true;
                  }
                }
              }
            }
          }
        }
      }

    }
    else if (reptile) {

    }
    else if (insect) {

    }
    else if (birds) {

    }

    if (quadruPed) {
      if (marsupial) {
        if (withFur) {
          if (paws) {
            if (hasTail) {
              if (longTail) {
                if (hasWings) {
                  console.log("You're an Tasmanian Wolf with wings.");
                  answer = true;
                }
              }
            }
          }
        }
      }
    }
  }
}
