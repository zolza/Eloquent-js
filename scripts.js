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