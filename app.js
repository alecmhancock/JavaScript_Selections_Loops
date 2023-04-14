console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (var i = 0; i < 100; i++ ){
    if (i % 2 == 0){
        continue;
    }
    else{
        console.log(i)
    }
}

// Exercise 2 Section

console.log("\n")

for (var n = 1; n <= 100; n++){
    var log = "";
    if (n % 3 == 0)
        log = "FIZZ";
    if (n % 5 == 0)
        log += "BUZZ";
    console.log(log || n );
  }

// Exercise 3 section

console.log("\n")

var y = 0;
while (y < 100)
if (y % 2 != 0){
    y++
    continue
}
else{
    y++
    console.log(y)
}



console.log("\n")

var x = 0;
while (x < 100) {
  x = x + 1
  var log2 = "";
    if (x % 3 == 0)
        log2 = "FIZZ";
    if (x % 5 == 0)
        log2 += "BUZZ";
    console.log(log2 || x );
}

console.log("\n")

let z = 0
do {
    if (z % 2 != 0){
        z++
        continue
    }
    else{
        z++
        console.log(z)
    }
} while (z < 100)

console.log("\n")

let b = 0
do{
    b = b + 1
  var log3 = "";
    if (b % 3 == 0)
        log3 = "FIZZ";
    if (b % 5 == 0)
        log3 += "BUZZ";
    console.log(log3 || b );
} while(b < 100)

let value = Math.round((Math.random() * 500));
let k = Math.round(Math.random() * (500 - 100) + 100);
var logger = "Did not find value."
for (var j = 0; j <= k; j++){
    if (j == value){
        logger = "Found value!"
        break;
    }
    else{
        continue;
    }
}
console.log(`Value is ${value}`)
console.log(`Range is ${k}`)
console.log(logger)


console.log("\n")

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let h = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`Fizz divisor is ${fizzDivisor}`)
console.log(`Buzz divisor is ${buzzDivisor}`)
console.log(`iteration is ${h}`)
console.log(`Starting number is ${start}`)

for (var f = start; f <= h; f++){
    var log4 = "";
    if (f % fizzDivisor == 0)
        log4 = "FIZZ";
    if (f % buzzDivisor == 0)
        log4 += "BUZZ";
    console.log(log4 || f );
  }
