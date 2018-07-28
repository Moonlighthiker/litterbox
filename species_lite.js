/*
    A short Q/A Game to identify your species.
    Just for fun.
*/

// Let's say for example you're a kangaroo in this session.

var species   = false;

// species categories
var mammal    = true;
var amphibian = false;
var reptile   = false;
var insect    = false;
var birds     = false;

// 2 or 4 legs
var twoLegs   = false;
var fourLegs  = true;
var sixLegs   = false;
var eightLegs = false;
var moreLegs  = false;

// got tail?
var withTail  = false;

// got pouch?
var marsupial  = false;


// loop starts here
while (!species) {

// mamal section

  if (mammal) {
    console.log("You're a mammal.");
    if (twoLegs) {
      console.log("With two legs.");
      if (withTail) {
        console.log("You've got a tail.");
        if (marsupial) {
          console.log("You're a marsupial.");
          console.log("You are a kangaroo!");
          species = true;
        }
        else if (!marsupial) {
          console.log("You're not a marsupial.");
          console.log("You are somthing between Squirrel and Human with tail.");
          species = true;
        }
      }
      else if (!withTail) {
        console.log("Without a tail.");
        if (marsupial) {
          console.log("You're a marsupial.");
          console.log("You are a kangaroo which lost his tail. I'm so sorry!");
          species = true;
        }
        else if (!marsupial) {
          console.log("You're not a marsupial.");
          console.log("You are a Human, or a bipedal Ape. Greetings Sir.");
          species = true;
        }
      }
    }
    else if (fourLegs) {
      console.log("With four legs.!");
      if (withTail) {
        console.log("With a tail.");
        if (marsupial) {
          console.log("You're a marsupial.");
          console.log("You are a Tasmanian Wolf!");
          species = true;
        }
        else if (!marsupial) {
          console.log("You're not a marsupial.");
          console.log("You can be almost anything cuddly in the world!");
          species = true;
        }
      }
      else if (!withTail) {
        console.log("Without tail.");
        if (marsupial) {
          console.log("You're a marsupial.");
          console.log("You are a Wombat. Hello Sir!");
          species = true;
        }
        else if (!marsupial) {
          console.log("You're not a marsupial.");
          console.log("You are an Agouti? Nice to meet you!");
          species = true;
        }
      }
    }
  }

// amphibian section

  else if (amphibian) {
    console.log("You are an amphibian being.");
    if (twoLegs) {
      console.log("You have two legs.");
      if (withTail) {
        console.log("You've got a tail.");
        console.log("You are a young Frog or an Alien. Live in peace and prosper!");
        species = true;
      }
      else if (!withTail) {
        console.log("With no tail.");
        console.log("You're an Frog, I think. Or something from a foreign world!");
        species = true;
      }
    }
    else if (fourLegs) {
      console.log("You've got four legs.");
      species = true;
    }
  }

// reptile section

  else if (reptile) {
    console.log("You are a reptile. Hail to the snake!");
    species = true;
  }

// insect section

  else if (insect) {
    console.log("You are an insssect. The better you know!");
    species = true;
  }
  else if (birds) {
    console.log("You are a bird. Nice to meet you.");
    species = true;
  }
  else if (!species) {
    console.log("Kapier ich nich!");
    species = true;
  }
}
