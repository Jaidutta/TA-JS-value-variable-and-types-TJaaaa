// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = +prompt("Please enter your age in digits")
if(age < 4) {
  console.log(" Hey Kiddo! Can You Walk ?");
} else if(age >= 4 && age <= 11) {
  console.log(" You are too young to participate in the marathon");
} else if(age >=12 && age <=55) {
  console.log("You can participate in the marathon");
} else if(age > 55) {
  console.log(" You are too old to participate in the marthon");
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let e = +prompt("Please enter the number of 'e'")
let totalE = ''
for(let i = 1; i <= e; i++) {
  totalE += 'e'
}
console.log(`h${totalE}llo`);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let sum = 0; 
let num = +prompt("Please enter a number to get the sum of n natural number");
for(let i = 1; i <= num; i++) {
  sum += i
}
console.log(sum);
/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let number = +prompt("Enter a number")
switch(true) {
  case (number === 1):
    alert("ONE")
    break;
  case (number === 2):
    alert("TWO")
    break;
  case (number === 3):
    alert("THREE")
    break;
  case (number === 4):
    alert("FOUR")
    break;
  case (number === 5):
    alert("FIVE")
    break;
  case (number === 6):
    alert("SIX")
    break;
  case (number === 7):
    alert("SEVEN")
    break;
  case (number === 8):
    alert("EIGHT")
    break;
  case (number === 9):
    alert("NINE")
    break;
  default:
    alert("PLEASE TRY AGAIN")
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let mark = +prompt("Enter a number for your mark")
switch(true) {
  case (mark > 90):
    alert("Your Grade is AA")
    break;
  case (mark > 80 && mark <=90):
    alert("Your Grade is AB")
    break;
  case (mark > 70 && mark <=80):
    alert("Your Grade is BB")
    break;
  case (mark > 60 && mark <=70):
    alert("Your Grade is BC")
    break;
  case (mark > 50 && mark <=60):
    alert("Your Grade is CC")
    break;
  case (mark > 40 && mark <=50):
    alert("Your Grade is DD")
    break;
  case (mark <= 30):
    alert("Your Grade is FF")
    break;
}
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let number1 = +prompt("Enter number 1")
let number2 = +prompt("Enter number 2")
switch(true) {
  case (number1 > number2):
    alert(`${number1}`)
    break;
  case (number2 > number1):
    alert(`${number2}`)
    break;
  default:
    alert("Ensure the numbers are not equal")
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let signNum1 = +prompt("Please enter a number")
let signNum2 = +prompt("Please enter a second number")
let signNum3 = +prompt("Please enter a third number")

if(signNum1 * signNum2 * signNum3 === 0) {
  alert(`The product of ${signNum1}, ${signNum2} and  ${signNum3} is: 0`)
} else if(signNum1 * signNum2 * signNum3 > 0) {
  alert("+")
} else if(signNum1 * signNum2 * signNum3 < 0) {
  alert("-")
}
/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let calcNum1 = +prompt("Enter number 1 for the calculator")
let calcNum2 = +prompt("Enter number 2 for the calculator")
let operation = prompt("Enter the operation for the calculator")


  if(operation === 'Add' || operation === 'add'){
    alert(`${calcNum1 + calcNum2}`)
  } else if (operation === 'Sub' || operation === 'sub'){
    if(calcNum1 > calcNum2) {
      alert(`${calcNum1 - calcNum2}`)
    } else {
      alert(`Number Two is larger then Number one`)
    }
  } else if(operation === 'Mul' || operation === 'mul'){
      alert(`${calcNum1 * calcNum2}`)
  } else if(operation === 'Div' || operation === 'div'){
    if(calcNum1 > calcNum2) {
      alert(`${calcNum1 / calcNum2}`)
    } else {
      alert(`Number Two is larger then Number one`)
    }
  }

