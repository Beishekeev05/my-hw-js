//! Цикл №1
console.log("задача №1");

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//! №2
console.log("задача №2");

for (let i = 1; i <= 100; i++) {
  i++;
  console.log(i);
}

//! №3
console.log("задача №3");

const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

//! №4
console.log("задача №4");

let array = ["Ivan", 99, "Sasha"];

let getLastValue = () => {
  if (array.length[0] === 0) {
  }
  return array[array.length - 1];
};
console.log(getLastValue(array));

//! №5
console.log("задача №5");

let random = [1, 20, 22, 24, 5];

let numberRandom = () => {
  return random[random.length - 1];
};
console.log(numberRandom());

//! №6
console.log("задача №6");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//! №7
console.log("задача №7");

let i = 1;

while (i < 100) {
  i++;
  console.log(i);
}

//! №8
console.log("задача №8");

let xbet = 0;

while (xbet <= 100) {
  if (xbet % 2 === 0) {
    console.log(xbet);
  }
  xbet++;
}

//! №9
console.log("задача №9");

let arrays = [2, 3, 4, 5, 6];

let newArray = arrays.map((x) => x + 1);

console.log(newArray);

// ! №10

function addNum(array, num) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

let result = addNum(numbers, 2);

console.log(result);

// ! №11

const strings = ["apple", "banana", "search", "orange", "grape"];

console.log(strings.includes("search"));

// ! №12

let myFunction = (nums) => {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      num++;
    }
  }
  return num;
};
let arra = [1, 3, 4, 5, -1, -5, -6];
let totalit = myFunction(arra);
console.log(totalit);

// ! №13

let searchEgg = (eggs) => {
  let voidArray = [];
  for (let i = 0; i < eggs.length; i++) {
    if (eggs[i] === "egg") {
      continue;
    }
    voidArray.push(eggs[i]);
  }
  return voidArray;
};
let animal = ["egg", "dog", "cat"];

let resultt = searchEgg(animal);

console.log(resultt);

// ! №14

let indexArray = ["one","two","three","four"]

console.log(indexArray.indexOf("three"));

// ! №15

function addArrays(array1, array2) {
  const maxLength = Math.max(array1.length, array2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const num1 = array1[i] || 0;
    const num2 = array2[i] || 0;
    result.push(num1 + num2);
  }

  return result;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(addArrays(array1, array2));

// ! №16

function minMax(nums) {
  if (nums.length === 0) {
    return {};
  }

  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return { min, max };
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

// ! №17

const numbersFruit = [
  "kiwi",
  "apple",
  "apple",
  "limon",
  "orenge",
  "orenge",
  "orenge",
];
const count = {};
numbersFruit.forEach((c) => {
  if (!count[c]) {
    count[c] = 1;
  } else {
    count[c]++;
  }
});
console.log(count);
