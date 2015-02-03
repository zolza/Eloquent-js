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
