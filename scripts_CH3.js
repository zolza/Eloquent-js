var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

// to samo co:

function potega (base, exponent) {
  var result = 1;
  for (i = 0; i < exponent; i++) //tutaj jest inny zapis
    result *= base;
  return result;
};


// tutaj jest zagwozdka

function hasz(){
var hash = "";
for (i=0; i<7; i++){
  hash += "#";
  return (hash);
}
};

//mianowicie, czemu w zależności od {} po pętli for
//zmienia się wykonanie pętli.

function hasz(){
var hash = "";
for (i=0; i<7; i++)
  hash += "#";
  return (hash);
};


//zapytać o wywołania i zmienną result, jak idzie pętla?
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++) //var definiuje nam zmienna lokalnie
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};


var launchMissiles = function(value) {
  missileSystem.launch("now");
};
if (safeMode)
  launchMissiles = function(value) {/* do nothing */};
//no dobra, ale czym jest tutaj safeMode? Argumentem? Czymś gdzieś zdefiniowanym?
//wywolanie launchMissiles:
//function (value) {
// missileSystem.launch("now");
// }
//to będzie to samo co:
function launchMissiles (value) {
  missileSystem.launch("now");
};
if (safeMode)
function launchMissiles (value) {/* do nothing */
};
//wywolanie launchMissiles:
//function launchMissiles(value) {
// missileSystem.launch("now");
// }

function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}
// to mialabym zdefiniowac funkcje pod zmienna i wtedy byloby ok? nie do konca rozumiem ten fragment książki...


function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function greet(who) {
  console.log("Hello " + who);
}
console.log("Bye");

function power (base, exponent) {
  if (exponent == undefined) {
    exponent = 2;
  } // nie ma nawiasów w książce, dlaczego?
  var result = 1;
  for (var i=0; i<exponent; i++) {
    result *= base;
  }
  return result;
};

function wrapValue (x) {
  var valueLocal = x;
  return function () { //co tak wlaściwie znaczy, że nie ma nazwy?
    return valueLocal; // czyli return zapisuje, gdzie?
  }
}; // Uncaught ReferenceError: valueLocal is not defined
//zmienna jest zdefiniowana tylko w obrebie funkcji, consola nie ma do niej dostepu.


//recursion
function powerR(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * powerR(base, exponent - 1);
}

//no recursion
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}
//!!!Running through a simple loop is a lot cheaper than calling a function multiple times.
