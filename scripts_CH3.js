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


