var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);

var countEven = 0;
while (countEven<20) {
	console.log(countEven);
	countEven +=2;
}
//dlaczego ta nie daje undefined w konsoli?
var countEven = 0;
while (countEven<20) {
	countEven +=2;
	console.log(countEven);
}
//dlaczego ta daje undefined jako ostatnią wartość w konsoli?

var counter = 0;
var powers = 1;
while (counter<13) {
	counter = counter + 1;
	powers = powers *2;
	console.log(powers);
}
// i znow ostatnia wartosci jest undefined

var counter = 0;
var powers = 1;
while (counter<13) {
	counter += 1;
	powers *= 2;
	console.log(powers);
}

// i znow ostatnia wartosci jest undefined

do {
  var name = prompt("Who are you?");
} while (!name);
console.log(name);

//This program will force you to enter a name.
//It will ask again and again until it gets something that is not an empty string.
//Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true.

for (counter=0; counter <20; counter +=2) {
	console.log(counter);
}
//znow undefined na koncu

var powers13 = 1;
for (counter=0; counter<13; counter++){
	powers13 *=2
	console.log(powers13)
}

// dlaczego przy przesunięcu 52 na 54 funkcja wykonuje sie tylko raz a nie 13.

function div7 () {
  for (var current = 20; ; current++) {
    if (current % 7 == 0)
      break;
  }
  console.log(current);
};


function suma (a,b) {
    return a+b;
};

function srednia (a,b) {
    return suma(a,b) / 2;
};

function sum (array) {
  var total = 0;
  for (i=0; i<array.length; i++){
    total += array[i];
  }
  return total;
}

function mean (array) {
  var length = array.length;
  return sum(array) / length;
};

//very end of chapter 2

switch (prompt("Hi there, how are you doing?")) {
case "well":
  console.log("Great!");
  break;
case "awful":
  console.log("Wanna cup of coffee?");
  break;
case "?":
  console.log("!");
  break;
default:
  console.log(":)");
  break;
}

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var hash = "";
for (i=0; i<7; i++){
  hash += "#"
  console.log(hash);
}
// dlaczego jak daje tutaj return zamist console.log, zwraca mi invalid return statement?
// wiem, że to nie funkcja i tylko funkcje coś zwracają, ale nie powinno zadziałać?
function test (number){
var number = 0;
for (i=0; i<7; i++){
  number += 1
}
  return number;
}

var number = 0;
for (i=0; i<=100; i++) {
  if (number % 3 == 0 && number % 5 != 0)
    console.log("fizz");
  else if (number % 5 == 0 && number % 3 != 0)
    console.log("buzz");
  else if (number % 3 == 0 && number % 5 == 0 && number != 0)
    console.log("FizzBuzz");
  else
    console.log(number)
  number += 1;
};

//samodzielny fizz buzz!
