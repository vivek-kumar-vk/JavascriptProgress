"use strict";

let calcage = function calcage(birthyear) {
  return 2020 - birthyear;
};

const calAge2 = (birthyear) => 2037 - birthyear;
const age2 = calAge2(1911);
console.log(age2);

const years = (birthyear) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return retirement;
};

const retire = years(1991);
console.log(retire);

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applesPiece = cutFruitPieces(apples);
  const orangesPiece = cutFruitPieces(oranges);

  const juice = `Juice with ${applesPiece} apple pices and ${orangesPiece} orange pieces`;
  return juice;
}
const result = fruitProcessor(10, 20);
console.log(result);

function yearsUntilRetirement(birthAge, firstName) {
  const age = 2024 - birthAge;
  const retirement = 65 - birthAge;
  if (retirement > 0) {
    console.log(`${firstName} has ${retirement} more years left`);
  } else {
    console.log(`${firstName} retired  ${retirement * -1} years ago`);
  }
}
console.log(yearsUntilRetirement(25, "vivek kumar"));
console.log(yearsUntilRetirement(90, "xd"));
// Arrays------------------------------------------------

const friends = ["michale", "steven", "peter"];
console.log(friends);
const year = new Array(1991, 2341, 232, 1234, 2024);

console.log(friends[2]);
console.log(friends.length);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

const methods = ["m1", "m2", "m3", "m4"];
methods.push("m5");
console.log(methods, methods.length);

methods.unshift("m0");
console.log(methods);

methods.pop();
methods.pop();
console.log(methods);

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    bill = (bill * 15) / 100;
  } else {
    bill = (bill * 20) / 100;
  }
  return bill;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
tips.push;
console.log(tips);

const assign1 = {
  firstName: "Vivek",
  lastName: "kumar",
  age: 2024 - 1999,
  job: "none",
  friends: ["a", "b", "c"],
};
const frn = assign1.friends;
const length = frn.length;
console.log(assign1);
console.log(
  assign1.firstName +
    " has " +
    assign1.friends.length +
    " freiends and one of them is " +
    assign1.friends[0]
);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBmi();
john.calcBmi();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi}`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
}
// For loop done above with friends array
// use equals or push too add element in an array.
// array generally run from 0 to array.length.
// continue is to exit current itteration of the loop and continue to next iteration.
// break is use to complettly terminate the loop.

const assign = ["Vivek", "kumar", 2024 - 1999, "none", ["a", "b", "c"]];
for (let i = assign.length - 1; i >= 0; i--) {
  console.log(i, assign[i]);
}
