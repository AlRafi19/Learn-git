//
console.log('First class & Higher Order Function');

// JS E function first class function hisebe
// treat kora hoy 
// function er koek ti 
// bises behaviour er karone

// ____________Reason 1:
// ek function er bhitor theke 
// onno ar ekti function 
// ke return korano jay

//_____________Reason 2:
// function ke variable er
// bhitor assign kora jay


//_____________Reason 3:
//ekti function ke 
// onno kono function er 
// argument hisebe pass korano jay

//______________Reason 2 example:1

let numOne = 22;
let numTwo = 13;


const assignFunctionToVariable = (num1,num2)=>{
    return num1+num2;
}

console.log(assignFunctionToVariable(numOne,numTwo));

//example:2

const checkMe = (num3,num4,num5)=>{
            if(num3>num4 && num3>num5){
                return (`${num3} is bigger than ${num4} and ${num5}`);
            }else if(num4>num3 && num4>num5){
                return (`${num4} is bigger than ${num3} and ${num5}`);
            }else{
                return (`${num5} is bigger than other two numbers`);
            }
}

console.log(checkMe(11,2,77));


//__________Reason 1: Example

//A function that returns a function is called a Higher-Order Function.

const returnAFunction = (name)=>{
    //console.log(`Hello ${name}` )// ekta function e only 1 return thakbe 
    return function favourite(item){
        return `Do you like ${item}, ${name} ! `;
    }
}

console.log(returnAFunction('Abdullah')('Coconat'));


const studentName = {
    student1:'Abdullah',
    student2: 'Ashish',
    student3: 'Sabbir'
}

const numArray=[34,35,70];

const functionForObject = (studentName)=>{
    return function ForArray(numArray){
        return `${studentName.student1} ${studentName.student2} ${studentName.student3} got ${numArray}`
            /* for (let value in studentName){
                 return (studentName[value])
             }*/
    }
}

console.log(functionForObject(studentName)(numArray));






