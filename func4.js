const myArrowNotation = (num1,num2) => {
    return num1+num2;
}
console.log(myArrowNotation(105,534));

const sum = number => number+number;
console.log(sum(25));

const sumnumbers = num => {
    const sum = num+num;
    return sum(1500);
} 
const square = number => number*number;
console.log(square(25));