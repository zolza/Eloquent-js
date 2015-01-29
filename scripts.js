var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);

var countEven = 0;
while (countEven<20) {
	console.log(countEven)
	countEven +=2;
}
//dlaczego ta nie daje undefined w konsoli?
var countEven = 0;
while (countEven<20) {
	countEven +=2;
	console.log(countEven)
}
//dlaczego ta daje undefined jako ostatnią wartość w konsoli?