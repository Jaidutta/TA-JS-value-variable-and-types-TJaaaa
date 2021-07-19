// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number( prompt("Please Enter a number") );
if(number % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let firstNumber = Number(prompt("Please Enter the first number"));
let secondNumber = Number(prompt("Please Enter a second , not equal to the last one entered"));
if(firstNumber > secondNumber) {
  alert(`The max value is ${firstNumber}`);
} else {
  alert(`The max value is ${secondNumber}`);
}
// 3. Convert the above code using`?` terniary operator
let numberFirst = Number(prompt("Please Enter the first number"));
let numberSecond = Number(prompt("Please Enter a second , not equal to the last one entered"));
numberFirst > numberSecond ? alert(`The max value is ${numberFirst}`) : alert(`The max value is ${numberSecond}`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter a house name");
if(houseName === /stark/i) {
 console.log(" Winter is coming");
} else if (houseName === /lannister/i){
  console.log(" A lannister always pays his debt");
} else{
  console.log(" All men must die");
}


// 5. Convert the above code using`?` terniary operator
let houseNameTernary = prompt("Enter a house name");
houseNameTernary === /stark/i ?  console.log(" Winter is coming") : (((houseName === /lannister/i) ? (console.log(" A lannister always pays his debt")) : console.log(" All men must die")))

// Switch
// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber = + prompt("Enter the month as a number");
switch(monthNumber) {
  case 1:
    alert("January")
    break;
  case 2:
    alert("February")
    break;
  case 3:
    alert("March")
    break;
  case 4:
    alert("April")
    break;
  case 5:
    alert("May")
    break;
  case 6:
    alert("June")
    break;
  case 7:
    alert("July")
    break;
  case 8:
    alert("August")
    break;
  case 9:
    alert("September")
    break;
  case 10:
    alert("October")
    break;
  case 11:
    alert("November")
    break;
  case 12:
    alert("December")
    break;
  default:
   alert("Not a valid number. Please select a number from 1 - 12");
}
  
let monthNum = + prompt("Enter the month as a number");

  if(monthNum === 1) {
    alert("January")
  } else if(monthNum === 2) {
    alert("February")
  } else if(monthNum === 3) {
    alert("March")
  } else if(monthNum === 4) {
    alert("April")
  }  else if(monthNum === 5) {
    alert("May")
  }  else if(monthNum === 6) {
    alert("June")
  }  else if(monthNum === 7) {
    alert("July")
  }  else if(monthNum === 8) {
    alert("August")
  }  else if(monthNum === 9) {
    alert("September")
  }  else if(monthNum === 10) {
    alert("October")
  }  else if(monthNum === 11) {
    alert("November")
  }  else if(monthNum === 12) {
    alert("December")
  }  else  {
    alert("Not a valid number. Please select a number from 1 - 12");
  } 
    
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = +prompt("Enter your salary");
switch(true) {
  case (salary <= 20000):
    alert(`The in- hand amount is ${salary - (salary * 0.10)}`)
    break;
  case(salary <= 40000):
    alert(`The in- hand amount is ${salary - (salary * 0.20)}`)
    break;
  case(salary > 50000):
    alert(`The in- hand amount is ${salary - (salary * 0.30)}`)
    break;
}

let employeeSalary = +prompt("Enter your yearly salary");
if(employeeSalary <= 20000) {
  alert(`The in- hand amount is ${employeeSalary - (employeeSalary * 0.10)}`)
} else if(employeeSalary <= 40000) {
  alert(`The in- hand amount is ${employeeSalary - (employeeSalary * 0.20)}`)
} else if(employeeSalary > 50000) {
  alert(`The in- hand amount is ${employeeSalary - (employeeSalary * 0.30)}`)
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = +prompt("Enter your mark");
switch(true) {
  case (marks > 100):
    alert(`Marks can't be greater than 100`);
    break;
  case(marks > 80 && marks < 100):
    alert(`Grade A`);
    break;
  case(marks > 50 && marks < 80):
    alert(`Grade B`);
    break;
  case(marks > 30 && marks < 50):
    alert(`Grade C`);
    break;
  default:
   alert("Grade D");
}

let studentMarks = +prompt("Enter your mark");
  if(studentMarks > 100) {
    alert(`Marks can't be greater than 100`);
  } else if(studentMarks > 80 && studentMarks < 100) {
    alert(`Grade B`);
  } else if(studentMarks > 30 && studentMarks < 50) {
    alert(`Grade C`);
  } else {
    alert("Grade D")
  }
    
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt(`What is the weather like outside?`)
switch(true) {
  case(weather === `sunny`): 
    alert(`Wear a T-shirt`)
    break;
  case(weather === `rainy`):
    alert(`Don't forget to take your raincoat`);
    break;
  case(weather === `hot`):
    alert(`Get a hanky`);
    break;
  case(weather === `freezing`):
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
}

let weatherOutside = prompt(`What is the weather like outside?`)
 if(weatherOutside === `sunny`) {
  alert(`Wear a T-shirt`);
 } else if(weatherOutside === `rainy`) {
  alert(`Don't forget to take your raincoat`);
 } else if(weatherOutside === `hot`) {
  alert(`Get a hanky`);
 } else if(weatherOutside === `freezing`) {
  alert(`Get your sweater on`);
 } else {
  alert(`Not a valid input`)
 }

